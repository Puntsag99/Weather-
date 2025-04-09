"use client";

import { Day, Night, Circle, Input } from "@/components";
import { useCountries } from "@/hooks/useCountries";
import { useEffect, useState } from "react";

const Home = () => {
  const [selectedCityName, setSelectedCityName] = useState("Ulaanbaatar");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const weatherKey = process.env.WEATHERAPIKEY;

    async function fetchDataWeather() {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${selectedCityName}`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("fetchDataWeather aldaa:", error);
      }
    }

    fetchDataWeather();
  }, []);
  console.log("weather=weather", weather);

  // useWeather => selectedCityName
  return (
    <div className="h-[100vh]  flex relative ">
      <Input setSelectedCityName={setSelectedCityName} />
      <Day />
      <Night />
      <Circle />
    </div>
  );
};

export default Home;
