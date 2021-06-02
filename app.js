const express=require("express")
const path=require("path")
const mongoose=require("mongoose")
const userRoutes=require('./routes/user.Routes')
const noteRoutes=require("./routes/note.Routes")
var session = require('express-session')
const app=express()
// initial setup
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")


//setup Session
app.use(session({
    secret: 'lionomo',
    resave: false,
    saveUninitialized: true,
   
  }))
//setup Routes


app.use(userRoutes)
app.use(noteRoutes)

// MongoDB setup
mongoose.connect('mongodb+srv://dbfcis:j4MQgkB76feFW7y@cluster0.a5rkl.mongodb.net/NoteDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
app.listen(process.env.PORT||3000)