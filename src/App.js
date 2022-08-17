import { useState, useEffect } from "react";
import axios from "axios";
import FinderCountries from "./components/FinderCountries";
import CountriesFound from "./components/CountriesFound";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryToFind, setCountryToFind] = useState("");
  const [countriesFound, setCountriesFound] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      console.log("promise fulfilled");
      setCountries(res.data);
    });
  }, []);

  const handlerFinderChange = (event) => {
    setCountryToFind(event.target.value);
    if (event.target.value === "") {
      setCountriesFound([]);
    }
    const regexp = new RegExp(event.target.value, "i");
    const countriesAux = countries
      .filter((item) => regexp.test(item.name.common))
      .map((item) => item.name.common);
    countriesAux.length > 10
      ? setCountriesFound(["Too many matches, specify another filter"])
      : setCountriesFound(countriesAux);
  };

  return (
    <>
      <FinderCountries value={countryToFind} onChange={handlerFinderChange} />
      <div>
        <CountriesFound countries={countriesFound} />
      </div>
    </>
  );
}

export default App;
