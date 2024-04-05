const addDepartmentController = require("../controllers/client.controllers")

const clientRouter=require("express").Router()

clientRouter.post("/add-department",addDepartmentController)

module.exports=clientRouter