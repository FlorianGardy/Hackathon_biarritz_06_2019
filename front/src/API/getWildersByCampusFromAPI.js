import axios from "axios";

export default function getWildersByCampusFromAPI(campusID) {
  return axios({
    method: "get",
    baseURL: "http://localhost:3030",
    url: `/campuses/${campusID}/wilders`
  }).then(data => dataSelection(data));
}

function dataSelection(data) {
  return data.data;
}
