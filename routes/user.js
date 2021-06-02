const userContoller=require("../controllers/User")
const userRouter=require("express").Router()
userRouter.get("/",userContoller.LoginPage)
userRouter.get("/register",userContoller.RegisterPage)
userRouter.get("/LogOut",userContoller.LogOut)
userRouter.post("/handleSignUp",require('../validations/RegisterForm').Validations,userContoller.SaveUser)
userRouter.post("/handleSignin",require('../validations/LoginForm').Validations,userContoller.LoginUser)

module.exports=userRouter