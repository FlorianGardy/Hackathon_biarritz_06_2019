const Sequelize = require("sequelize");
const sequelize = require("../connect");
const { Campus } = require("../campus/campus.model");

const Match = sequelize.define("match", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  homeTeam: {
    type: Sequelize.STRING,
    allowNull: false
    // references: {
    //   model: Campus,
    //   key: "uid"
    // }
  },
  awayTeam: {
    type: Sequelize.STRING,
    allowNull: false
    // references: {
    //   model: Campus,
    //   key: "uid"
    // }
  },
  isoDate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  winnerUid: {
    type: Sequelize.STRING,
    allowNull: false
    // references: {
    //   model: Campus,
    //   key: "uid"
    // }
  },
  homeElo: {
    type: Sequelize.STRING,
    allowNull: true
  },
  awayElo: {
    type: Sequelize.STRING,
    allowNull: true
  },
  homeEloDiff: {
    type: Sequelize.STRING,
    allowNull: true
  },
  awayEloDiff: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = { Match };
