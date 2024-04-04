const { DataTypes } = require("sequelize");
const db = require("../../../db");

const Departments = db.pgConn.define("Departments", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  code: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports=Departments