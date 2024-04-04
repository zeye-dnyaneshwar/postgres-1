const { DataTypes } = require("sequelize");
const db = require("../../../db");

const Designations = db.pgConn.define("Designations", {
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

module.exports=Designations