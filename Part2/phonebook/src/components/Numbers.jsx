/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Person } from "./Person";

export const Numbers = ({ searchInput, persons, filteredList }) => {
  const myArray = searchInput !== "" ? filteredList : persons;
  return (
    <div>
      <div>
        <h3>Numbers:</h3>
      </div>
      {myArray.map((each, i) => (
        <Person key={i} element={each} />
      ))}
    </div>
  );
};
