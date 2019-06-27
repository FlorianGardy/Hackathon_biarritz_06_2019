import axios from "axios";

export default function getMatchesFromAPI() {
  return axios({
    method: "get",
    baseURL: "http://localhost:3030",
    url: "/matches"
  }).then(data => dataSelection(data));
}

function dataSelection(data) {
  return data.data;
}
