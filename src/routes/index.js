const router=require("express").Router()

router.use("/auth",require("./Auth.routes"))
router.use("/department",require("./department.route"))

module.exports=router