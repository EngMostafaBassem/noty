const UserRepos=require('../repos/User')
const { validationResult } = require('express-validator')
exports.LoginPage=(req,res)=>{
   if(req.session._id){
       res.redirect("/main")
   }
  res.render("login")
}
exports.RegisterPage=(req,res)=>{
    if(req.session._id){
        res.redirect("/main")
    }
    res.render("register")
  }
exports.SaveUser=(req,res)=>{
  const errors=validationResult(req)
  if(!errors.isEmpty()){

    res.render("register",{user:req.body,errors:errors.array()})
  }
  else{
    UserRepos.saveUser(req.body).then(()=>{
      res.redirect("/")
  }).catch((error)=>{
    res.render("register",{user:req.body,error:error})
  })
  }
  
  }
exports.LoginUser=(req,res)=>{
  const errors=validationResult(req)
  if(!errors.isEmpty()){

    res.render("login",{user:req.body,errors:errors.array()})
  }
  else{
    UserRepos.login(req.body).then((_id)=>{      
      req.session._id=_id  
      res.redirect("/main")
  }).catch((error)=>{
      res.render("login",{error})
     
  })
  }
   
  }

  exports.LogOut=(req,res)=>{
      req.session.destroy(function(error){
          if(error){
            res.render("login",{error})
          }
          res.redirect("/")
      })
  }