const addDepartmentController=async(req,res)=>{
   try {
      res.send("adding department")
   } catch (error) {
      console.error(error.message)
      res.status(500).json({error:'',errorDescription:error.message})
   }
}

module.exports=addDepartmentController