const { requireLogin } = require("../middlewares/auth.middleware")

const router=require("express").Router()

router.use("/auth",require("./auth.routes"))
router.use("/department",require("./department.route"))
router.use("/designation",require("./designation.routes"))
router.use("/client",requireLogin,require("./client.routes"))

module.exports=router