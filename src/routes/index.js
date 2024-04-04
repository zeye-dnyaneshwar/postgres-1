const router=require("express").Router()

router.use("/auth",require("./auth.routes"))
router.use("/department",require("./department.route"))
router.use("/designation",require("./designation.routes"))

module.exports=router