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

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected")
});

//setup Session
app.use(session({
    secret: 'lionomo',
    resave: false,
    saveUninitialized: true,
   
  }))
//setup Routes
app.use(require("./Routes/user.Routes"))
app.use(require("./Routes/note.Routes"))
app.get("/",(req,res)=>{
  res.send("hello from note app")
})
app.listen(process.env.PORT||3000)