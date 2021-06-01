const noteRouter=require("express").Router()
const noteController=require("../Controllers/Note.controller")
const AuthMidlwares=require("../Midlewares/Auth")
noteRouter.get("/main",AuthMidlwares.ValidAuth,noteController.MainPage)
noteRouter.get("/getNote",AuthMidlwares.ValidAuth,noteController.GetNote)
noteRouter.post("/saveNote",AuthMidlwares.ValidAuth,noteController.SaveNote)
noteRouter.get("/deleteNote/:Id",AuthMidlwares.ValidAuth,noteController.deletenote)
noteRouter.get("/getNote/:Id",AuthMidlwares.ValidAuth,noteController.GetNote)
module.exports=noteRouter