const userContoller=require("../Controllers/User.controller")
const userRouter=require("express").Router()
userRouter.get("/",userContoller.LoginPage)
userRouter.get("/register",userContoller.RegisterPage)
userRouter.get("/LogOut",userContoller.LogOut)
userRouter.post("/handleSignUp",require('../Validations/RegisterForm').Validations,userContoller.SaveUser)
userRouter.post("/handleSignin",require('../Validations/LoginForm').Validations,userContoller.LoginUser)

module.exports=userRouter