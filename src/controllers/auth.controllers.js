const { registerUserValidator } = require("../validators/auth.validator")
const userContext=require("../db/context/users.context")
const bcrypt=require("bcrypt")
const {PASSWORD_HASH_SALT}=require("../config/constants")

const userRegisterController=async(req,res)=>{
   try {
      const {isValid,params,errorMessage}=registerUserValidator(req.body)
      if(!isValid){
         return res.status(400).json({ error: "Validation Error", errorDescription: errorMessage });
      }
      const isUserAvailable = await userContext.getUserByEmail(params.email);
      if(isUserAvailable){
         return res.status(422).json({error: "Already registered", errorDescription: "Given email is already registered"})
      }
      const hashedPassword = await bcrypt.hash(params.password, PASSWORD_HASH_SALT);
      const newUserObj={
         name:params.name,
         email:params.email,
         password:hashedPassword,
         employeeId:params.employeeId,
         department:params.department,
         designation:params.designation
      }
      const newUser=await userContext.createNewUser(newUserObj)
      return res.status(201).json({ message: "Registration successful", newUser });
   } catch (error) {
      console.error("Registration Error", error);
      return res.status(500).json({ error: "Internal server error", errorDescription: error.message });
   }
}

const userLoginRouter=async(req,res)=>{
   res.send("login")
}

module.exports={userRegisterController,userLoginRouter}