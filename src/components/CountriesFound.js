import React from "react";

const CountriesFound = (props) => {
  return (
    <>
      {props.countries.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </>
  );
};
export default CountriesFound;
