const departmentRouter=require("express").Router()
const { createDepartmentController } = require("../controllers/department.controllers")

departmentRouter.post("/create",createDepartmentController)

module.exports=departmentRouter