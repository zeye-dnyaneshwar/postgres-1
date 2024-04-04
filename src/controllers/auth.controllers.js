const userRegisterController=async(req,res)=>{
   res.send("register")
}

const userLoginRouter=async(req,res)=>{
   res.send("login")
}

module.exports={userRegisterController,userLoginRouter}