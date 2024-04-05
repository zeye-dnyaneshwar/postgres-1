//Master Models
const Departments=require("./masters/Departments.master")
const Designations=require("./masters/Designations.master")

//Non-master Models
const Users=require("./Users.model")

//Users Associations
Departments.hasMany(Users)
Users.belongsTo(Departments)

Designations.hasMany(Users)
Users.belongsTo(Designations)
