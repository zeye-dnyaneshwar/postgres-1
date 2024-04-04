const { createDesignationController } = require("../controllers/designation.controllers")

const designationRouter=require("express").Router()

designationRouter.post("/create",createDesignationController)

module.exports=designationRouter