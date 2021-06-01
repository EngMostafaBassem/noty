const express=require("express")
const path=require("path")
const mongoose=require("mongoose")
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
app.use(require("./Routes/user.Routes"))
app.use(require("./Routes/note.Routes"))
app.listen(process.env.PORT||3000)