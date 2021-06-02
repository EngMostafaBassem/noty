const Note=require('../models/Note')
exports.AddNote=(userId,note)=>new Promise( async(resolve,error)=>{
    try{
        const {_id,...rest}=note
        await Note.insertMany({...rest,User:userId})
        resolve()
    }
    catch(ex){
        error(ex)
    }  

})

exports.updateNote=(note)=>new Promise( async(resolve,error)=>{
    try{
        await Note.updateOne({_id:note._id},{...note})
        resolve()
    }
    catch(ex){
        error(ex)
    }  


})

exports.showAllNotes=(userId)=>new Promise( async(resolve,error)=>{
    try{
        let  notes=await Note.find({User:userId})
        resolve(notes)
    }
    catch(ex){
        error(ex)
    }  


})



exports.GetNote=(Id)=>new Promise( async(resolve,error)=>{
    try{
        let  note=await Note.findOne({_id:Id}).exec()
      
        resolve({note})
    }
    catch(ex){
        error(ex)
    }  


})

exports.deleteNote=(id)=>new Promise( async(resolve,error)=>{
    try{
        await Note.findByIdAndRemove({_id:id})
        resolve()
    }
    catch(ex){
        error(ex)
    }  


})