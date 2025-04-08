"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export const Input = () => {
  const [countries, setCountries] = useState([]);
  const [userInput, setUserInput] = useState("");
  // console.log("ene bol state country:", countries);
  // console.log("ene bol user utag:", userInput);
  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const filteredCountries = countries.filter((item) =>
    item.country.toLowerCase().startsWith(userInput.toLowerCase())
  );

  useEffect(() => {
    async function fetchcountries() {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries"
        );
        const data = await response.json();
        // console.log(data);
        setCountries(data.data);
      } catch (error) {
        console.error("aldaa :", error);
      }
    }
    fetchcountries();
  }, []);
  return (
    <div className=" flex w-[567px] py-4 px-6 bg-white gap-x-4 rounded-[48px]">
      <Search className="w-[48px] h-[48px] opacity-20" />
      <input
        value={userInput}
        onChange={handleChange}
        type="text"
        placeholder="Search"
        className="font-bold text-[32px] w-full  outline-none"
      />

      {/* {filteredCountries.map((item, index) => (
        <div key={`${item.county}-${index}`} className="mb-4">
          <h2 className="text-lg font-bold">{item.country}</h2>
          <ul className="list-disc list-inside">
            {item.cities.map((city, index) => (
              <li key={`${city}-${index}`}>{city}</li>
            ))}
          </ul>
        </div>
      ))} */}
    </div>
  );
};
