const Designations = require("../../models/postgres/masters/Designations.master");

const createNewDesignation=async({name,code,description})=>{
    const designation = await  Designations.create({
        name,
        code,
        description
      });
      return {
        id: designation.dataValues.id,
        name: designation.dataValues.name,
        code: designation.dataValues.code,
        description:designation.dataValues.description
      };
}
const getDesignationByDesignationCode=async(code)=>{
    const designation=await Designations.findOne({
        where:{
            code
        }
    })
    return designation
}
const deleteDesignationByDesignationCode=async()=>{

}

module.exports={createNewDesignation,getDesignationByDesignationCode,deleteDesignationByDesignationCode}