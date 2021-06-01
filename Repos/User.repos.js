const User=require("../Models/User.model")
const bcyrpt=require("bcrypt")
exports.saveUser=(user)=>new Promise(async(resolve,error)=>{
   
 //here we will save user
  try{
   
    let DbUser=await User.findOne({Email:user.Email}).exec()  
   
    if(!DbUser){
   
        let password=user.Password  
        bcyrpt.hash(password,7,async function(err,hased){
            if(err)  error(err)
            const{Name,Email}=user
            await User.insertMany({Name,Email,Password:hased})
            resolve("New User has been Added Successfully")
        })
      
     }
     else{
        
        error("New User With Same Email has been found")
     }
    }
    
  catch(ex){
      error(ex)
  }

})

exports.login=(credentials)=>new Promise(async(resolve,error)=>{
    //here we will login
    try{
        let DbUser=await User.findOne({Email:credentials.Email}).exec()
        console.log(DbUser)
        if(DbUser){
         let password=DbUser.Password
         bcyrpt.compare(credentials.Password,password,function(err,result){
           if(result){
               if(err)  error(err)
               resolve(DbUser._id)
           }
           else{
               error("Invalid Username or password") 
           }       
         })
    
        }
    }catch(ex){
        resolve(error)
    }
   

   })




   