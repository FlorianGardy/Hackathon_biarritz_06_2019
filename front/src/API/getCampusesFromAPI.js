import axios from "axios";

export default function getCampusesFromAPI() {
  return axios({
    method: "get",
    baseURL: "http://localhost:3030",
    url: "/campuses"
  }).then(data => dataSelection(data));
}

function dataSelection(data) {
  return data.data;
}
