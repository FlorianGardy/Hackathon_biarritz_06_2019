module.exports = [
  {
    method: "GET",
    path: "/campuses",
    handler: (request, h) => {
      const campuses = [];
      return campuses;
    }
  },
  {
    method: "GET",
    path: "/campuses/{campusId}/wilders",
    handler: (request, h) => {
      const campusId = request.params.campusId;
      console.log(campusId);

      const wilders = [];
      return wilders;
    }
  }
];
