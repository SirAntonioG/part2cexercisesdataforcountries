import React from "react";

const CountriesFound = ({ countries, onClick }) => {
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
        <h3>Weather in {countries[0].capital[0]}</h3>
        <p>lat: {countries[0].latlng[0]}</p>
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
            <span>{item.name.common}</span>
            <button onClick={(e) => onClick(item)}>show</button>
          </div>
        ))}
      </div>
    );
  }
};

export default CountriesFound;
