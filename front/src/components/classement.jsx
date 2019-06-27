import React from "react";

const classement = [
  {
    name: "Biarritz Campus",
    city: "biarritz",
    country: "france",
    uid: "bia",
    creation: "01/12/2010",
    manager: { firstname: "marylou", lastname: "moulon" }
  },
  {
    name: "Berlin Campus",
    city: "berlin",
    country: "germany",
    uid: "ber",
    creation: "01/12/2012",
    manager: { firstname: "tim-alexander", lastname: "leuthold" }
  },
  {
    name: "Bordeaux Campus",
    city: "bordeaux",
    country: "france",
    uid: "bor",
    creation: "09/03/2016",
    manager: { firstname: "elisa", lastname: "etcheverry" }
  },
  {
    name: "Bucarest Campus",
    city: "bucarest",
    country: "france",
    uid: "buc",
    creation: "09/05/2011",
    manager: { firstname: "irina", lastname: "dumitru" }
  },
  {
    name: "London Campus",
    city: "london",
    country: "united kingdom",
    uid: "buc",
    creation: "01/02/2002",
    manager: { firstname: "carolina", lastname: "veloso" }
  },
  {
    name: "Madrid Campus",
    city: "madrid",
    country: "spain",
    uid: "mad",
    creation: "11/11/2011",
    manager: { firstname: "maria", lastname: "lopez-obrero" }
  },
  {
    name: "Brussels Campus",
    city: "brussels",
    country: "belgium",
    uid: "bru",
    creation: "06/07/2014",
    manager: { firstname: "françois", lastname: "blondeau" }
  },
  {
    name: "Lisbon Campus",
    city: "lisbon",
    country: "portugal",
    uid: "lis",
    creation: "03/11/2017",
    manager: { firstname: "ana-sofia", lastname: "martins" }
  },
  {
    name: "Paris Campus",
    city: "paris",
    country: "france",
    uid: "par",
    creation: "01/11/2015",
    manager: { firstname: "marion", lastname: "gigue" }
  },
  {
    name: "Marseille Campus",
    city: "marseille",
    country: "france",
    uid: "mar",
    creation: "01/10/2016",
    manager: { firstname: "caroline", lastname: "larcié" }
  },
  {
    name: "Lille Campus",
    city: "lille",
    country: "france",
    uid: "lil",
    creation: "01/07/2017",
    manager: { firstname: "olivier", lastname: "trentesaux" }
  },
  {
    name: "Tours Campus",
    city: "tours",
    country: "france",
    uid: "tour",
    creation: "05/10/2016",
    manager: { firstname: "olympe", lastname: "trentesaux" }
  },
  {
    name: "Toulouse Campus",
    city: "toulouse",
    country: "france",
    uid: "toul",
    creation: "05/10/2012",
    manager: { firstname: "justine", lastname: "lacousse" }
  },
  {
    name: "Strasbourg Campus",
    city: "strasbourg",
    country: "france",
    uid: "stra",
    creation: "25/02/2016",
    manager: { firstname: "gilles", lastname: "samuel" }
  }
];

const NewClassement = () => {
  return (
    <div>
      {classement
        .map((classe, index) => (
          <div key={index} className="text-success">
            {classe.name} - {classe.country} - {classe.city}
          </div>
        ))
        .slice(0, 3)}
      {classement
        .map((classe, index) => (
          <div key={index} className="text-danger">
            {classe.name} - {classe.country} - {classe.city}
          </div>
        ))
        .slice(classement.length - 3, classement.length)}
    </div>
  );
};

export default NewClassement;
