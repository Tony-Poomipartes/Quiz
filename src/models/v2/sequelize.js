require("dotenv/config");

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PGDATABASE, {
  dialect: "postgres",
  define: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = sequelize;
