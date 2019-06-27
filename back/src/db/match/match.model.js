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
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Campus,
      key: "id"
    }
  },
  awayTeam: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Campus,
      key: "id"
    }
  },
  isoDate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  winnerId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  homeElo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  awayElo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  homeEloDiff: {
    type: Sequelize.STRING,
    allowNull: false
  },
  awayEloDiff: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = { Match };
