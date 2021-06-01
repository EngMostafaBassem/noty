const express=require("express")
const path=require("path")
const mongoose=require("mongoose")
const userRoutes=require('./Routes/user.Routes')
const noteRoutes=require("./Routes/note.Routes")
var session = require('express-session')
const app=express()
// initial setup
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"Public")))
app.set("view engine","ejs")
// MongoDB setup

mongoose.connect('mongodb+srv://dbfcis:j4MQgkB76feFW7y@cluster0.a5rkl.mongodb.net/NoteDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});


//setup Session
app.use(session({
    secret: 'lionomo',
    resave: false,
    saveUninitialized: true,
   
  }))
//setup Routes
app.get("/",(req,res)=>{
  if(req.session._id){
    res.redirect("/main")
   }  else{
  res.render("login")
}
 
})
app.use(userRoutes)
app.use(noteRoutes)

app.listen(process.env.PORT||3000)