import React, { useCallback, useEffect, useState } from "react";
import NewCustomer from "./components/NewCustomer";

const App = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountriesHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json"
      );
      if (!response.ok) throw new Error("Something went Wrong");
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchCountriesHandler();
  }, [fetchCountriesHandler]);

  // console.log(countries);
  const Bangladesh =
    countries.length > 0
      ? countries.filter((country) => country.name === "Bangladesh")
      : "";
  console.log(Bangladesh && Bangladesh.states);

  return (
    <>
      <NewCustomer />
    </>
  );
};

export default App;
