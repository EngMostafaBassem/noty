const NoteRepos=require("../repos/Note")
exports.MainPage=(req,res)=>{
    let userId=req.session._id
    let note=req.session.note
     NoteRepos.showAllNotes(userId).then(notes=>{
         if(note){
            res.render("index",{notes,note})
         }
         else{
            res.render("index",{notes})
         }
        
     })
}

exports.SaveNote=(req,res)=>{
    let userId=req.session._id
    if(req.body._id!=''){
        console.log('note id ',req.body._id)
        NoteRepos.updateNote(req.body).then(()=>{
            res.redirect("/main")
          }).catch((ex)=>res.send(ex))
    }
    else{
        console.log('note id 2 ',req.body._id)
        NoteRepos.AddNote(userId,req.body).then(()=>{
            res.redirect("/main")
          }).catch((ex)=>res.send(ex))
    }
    
   
}

exports.GetNote=(req,res)=>{
    let id=req.params.Id
    NoteRepos.GetNote(id).then((note)=>{
      
        res.json(note)
       // console.log(note)
        //console.log(notes)
     // res.render("index",{notes})
    }).catch((ex)=>res.send(ex))
}

exports.deletenote=(req,res)=>{
    let id=req.params.Id
    NoteRepos.deleteNote(id).then(()=>{
     res.redirect("/main")
    }).catch((ex)=>res.send(ex))
}
