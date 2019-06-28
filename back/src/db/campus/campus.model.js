const Sequelize = require("sequelize");
const sequelize = require("../connect");

const Campus = sequelize.define("campus", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  uid: {
    type: Sequelize.STRING,
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
  country: {
    type: Sequelize.STRING,
    allowNull: false
  },
  creation: {
    type: Sequelize.STRING,
    allowNull: false
  },
  manager: {
    type: Sequelize.JSON,
    allowNull: false
  },
  currentElo: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1000
  }
});

module.exports = { Campus };
