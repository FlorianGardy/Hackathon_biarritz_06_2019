axios = require("axios");

module.exports = function() {
  return axios({
    method: "get",
    url:
      "https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/matches"
  }).then(data => dataSelection(data));
};

function dataSelection(rawData) {
  const selectedData = rawData.data;
  return selectedData;
}
