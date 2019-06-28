import React from "react";
import { getCampuses } from "../pills/campuses/campuses.action";

const classement = [getCampuses];

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
