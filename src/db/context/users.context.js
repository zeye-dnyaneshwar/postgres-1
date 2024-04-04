const Users = require("../../models/postgres/Users.model")

const createNewUser=async({name,email,password,employeeId,department,designation})=>{
    const user=await Users.create({
        name,email,password,employeeId,department,designation
    })
    return {
        id:user.dataValues.id,
        name:user.dataValues.name,
        email:user.dataValues.email
    }
}

const getUserByEmail=async(email)=>{
    const user=await Users.findOne({
        where:{
            email
        }
    })
    return user
}


module.exports={createNewUser,getUserByEmail}
