const { userRegisterController, userLoginController } = require("../controllers/auth.controllers")

const authRouter=require("express").Router()

authRouter.post("/register",userRegisterController)
authRouter.post("/login",userLoginController)

module.exports=authRouter