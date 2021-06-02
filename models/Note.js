const mongoose=require('mongoose')
const noteSchema=new mongoose.Schema({
    Title:String,
    Description:String,
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
   
   
},{
    timestamps:true
})
const Note=mongoose.model("Notes",noteSchema)
module.exports=Note