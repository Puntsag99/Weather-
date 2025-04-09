"use client";
import { CityCoun } from "@/components";
import { useCountries } from "@/hooks/useCountries";
import { Search } from "lucide-react";
import { useState } from "react";

export const Input = ({ setSelectedCityName }) => {
  const [userInput, setUserInput] = useState("");

  const allCityName = useCountries();

  const filteredCity = allCityName
    .filter((cityName) =>
      cityName.toLowerCase().startsWith(userInput.toLocaleLowerCase())
    )
    .slice(0, 4);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  // select hiisen utgaa setSelectedCityName-d ugnu
  return (
    <div className=" flex w-[567px] py-4 px-6 bg-white gap-x-4 rounded-3xl">
      <Search className="w-12 h-12 opacity-20" />
      <input
        value={userInput}
        onChange={handleChange}
        type="text"
        placeholder="Search"
        className="font-bold text-[32px] w-full  outline-none"
      />
      {filteredCity.map((city) => {
        return <p>{city}</p>;
      })}
    </div>
  );
};
