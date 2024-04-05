const { createDepartmentValidator } = require("../validators/department.validators")
const departmentContext =require("../db/context/departments.context")

const createDepartmentController=async(req,res)=>{
  try {
    const {isValid,params,errorMessage}=createDepartmentValidator(req.body)
    if(!isValid){
    return res.status(400).json({ error: "Validation Error", errorDescription: errorMessage });
    }
    const isDepartmentAvailable=await departmentContext.getDepartmenByDepartmentCode(params.code)
    if(isDepartmentAvailable){
        return res.status(422).json({ error: "Department already present", errorDescription: "Given department is already registered" });
    }
    const newDepartmentObj={
        name:params.name,
        code:params.code,
        description:params.description
    }
    const newDepartment=await departmentContext.createNewDepartment(newDepartmentObj);
 
     return res.status(201).json({ message: "Department created", newDepartment });
  } catch (error) {
    console.error("Registration Error", error);
     return res.status(500).json({ error: "Internal server error", errorDescription: error.message });
  }
  
}




module.exports={createDepartmentController}

