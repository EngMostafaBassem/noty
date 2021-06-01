const GetNoteAjax=(id)=>{

        $.get(`/getNote/${id}`).done(result=>{
            const {note}=result
            console.log(note)
            $("#title").val(note.Title)
            $("#desc").val(note.Description)
            $("#noteId").val(note._id)
            $("#exampleModal").modal('toggle')
            $("#btn-note").text("Edit Note")
           
        })
  
  
}

const ClearInputs=()=>{
    $("#title").val('')
    $("#desc").val('')
    $("#noteId").val('')
    $("#btn-note").text("Add Note")
}