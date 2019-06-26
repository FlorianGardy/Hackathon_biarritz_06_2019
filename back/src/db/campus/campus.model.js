const Sequelize = require("sequelize");
const sequelize = require("../connect");

const Campus = sequelize.define("campus", {
  uid: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  creation: {
    type: Sequelize.STRING,
    allowNull: false
  },
  manager: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: false
  },
  currentElo: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "1000"
  }
});

module.exports = { Campus };
