axios = require("axios");

module.exports = function() {
  return axios({
    method: "get",
    url:
      "https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/matches"
  })
    .then(data => dataSelection(data))
    .then(selectedData => dataNormalization(selectedData));
};

function dataSelection(rawData) {
  const selectedData = rawData.data;
  return selectedData;
}

function dataNormalization(selectedData) {
  selectedData.sort(function(a, b) {
    a = normaliseDate(a.isoDate);
    b = normaliseDate(b.isoDate);
    return a > b ? 1 : a < b ? -1 : 0;
  });
  return selectedData;
}

function normaliseDate(date) {
  const parts = date.split("/");
  return new Date(parts[2], parts[1] - 1, parts[0]);
}
