import { useState, useEffect } from "react";
import axios from "axios";
import FinderCountries from "./components/FinderCountries";
import CountriesFound from "./components/CountriesFound";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryToFind, setCountryToFind] = useState("");
  const [countriesFound, setCountriesFound] = useState([]);
  const [weather, setWeather] = useState({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // let latlng = [];
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
    // axios
    //   .get(
    //     "https://api.openweathermap.org/data/2.5/weather?lat=" +
    //       latlng[0] +
    //       "&lon=" +
    //       latlng[1] +
    //       "&appid=" +
    //       process.env.REACT_APP_API_KEY
    //   )
    //   .then((res) => {
    //     setWeather(res.data);
    //   });
  }, []);

  const handlerFinderChange = (event) => {
    setCountryToFind(event.target.value);
    if (event.target.value === "") {
      setCountriesFound([]);
    } else {
      const regexp = new RegExp(event.target.value, "i");
      const countriesAux = countries.filter((item) =>
        regexp.test(item.name.common)
      );
      setCountriesFound(countriesAux);
    }
  };

  const buttonClick = (item) => {
    setCountriesFound([item]);
  };

  return (
    <>
      <FinderCountries value={countryToFind} onChange={handlerFinderChange} />
      <div>
        <CountriesFound
          countries={countriesFound}
          onClick={buttonClick}
          weather={weather}
        />
      </div>
    </>
  );
}

export default App;
