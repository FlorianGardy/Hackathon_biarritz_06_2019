const Sequelize = require("sequelize");
const sequelize = require("../connect");
const { Campus } = require("../campus/campus.model");

const Match = sequelize.define("match", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  homeTeam: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: Campus,
      key: "uid"
    }
  },
  awayTeam: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: Campus,
      key: "uid"
    }
  },
  isoDate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  winnerUid: {
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
