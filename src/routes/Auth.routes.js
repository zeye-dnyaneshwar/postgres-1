const { userRegisterController, userLoginRouter } = require("../controllers/auth.controllers")

const authRouter=require("express").Router()

authRouter.post("/register",userRegisterController)
authRouter.post("/login",userLoginRouter)

module.exports=authRouter