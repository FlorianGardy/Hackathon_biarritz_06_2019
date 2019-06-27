const Sequelize = require("sequelize");
const sequelize = require("../connect");
const { Campus } = require("../campus/campus.model");

const Wilder = sequelize.define("wilder", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  campus: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Campus,
      key: "id"
    }
  }
});

module.exports = { Wilder };
