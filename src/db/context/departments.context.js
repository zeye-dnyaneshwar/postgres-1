const Departments = require("../../models/postgres/masters/Departments.master");

const createNewDepartment=async({name,code,description})=>{
    const department = await Departments.create({
        name,
        code,
        description
      });
      return {
        id: department.dataValues.id,
        name: department.dataValues.name,
        email: department.dataValues.code,
        description:department.dataValues.description
      };
}
const getDepartmenByDepartmentCode=async(code)=>{
    const department=await Departments.findOne({
        where:{
            code
        }
    })
    return department
}
const deleteDepartmentByDepartmentCode=async()=>{

}
module.exports={createNewDepartment,getDepartmenByDepartmentCode,deleteDepartmentByDepartmentCode}