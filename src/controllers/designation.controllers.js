const { createDepartmentValidator } = require("../validators/department.validators");
const designationContext=require("../db/context/designation.context")

const createDesignationController=async(req,res)=>{
    try {
      const {isValid,params,errorMessage}=createDepartmentValidator(req.body)
      if(!isValid){
      return res.status(400).json({ error: "Validation Error", errorDescription: errorMessage });
      }
      const isDesignationAvailable=await designationContext.getDesignationByDesignationCode(params.code)
      if(isDesignationAvailable){
          return res.status(422).json({ error: "Department already present", errorDescription: "Given department is already registered" });
      }
      const newDesignationObj={
          name:params.name,
          code:params.code,
          description:params.description
      }
      const newDesignation=await designationContext.createNewDesignation(newDesignationObj);
   
       return res.status(201).json({ message: "Department created",newDesignation  });
    } catch (error) {
      console.error("Registration Error", error);
       return res.status(500).json({ error: "Internal server error", errorDescription: error.message });
    }
    
  }

  module.exports={createDesignationController}