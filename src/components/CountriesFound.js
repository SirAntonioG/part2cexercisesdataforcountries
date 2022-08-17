import React from "react";

const CountriesFound = ({ countries }) => {
  if (countries.length === 1) {
    return (
      <div>
        <h2>{countries[0].name.common}</h2>
        <p>
          Capital: {countries[0].capital[0]} <br />
          Area: {countries[0].area}
        </p>
        <h3>Languajes</h3>
        <ul>
          {Object.values(countries[0].languages).map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <img src={countries[0].flags.png} alt="" />
      </div>
    );
  } else if (countries.length > 10) {
    return (
      <>
        <div>
          <p>"Too many matches, specify another filter"</p>
        </div>
      </>
    );
  } else if (countries.length <= 10) {
    return (
      <div>
        {countries.map((item, i) => (
          <div key={i}>
            <p>{item.name.common}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return <p>"Type something to find countries"</p>;
  }
};

export default CountriesFound;
