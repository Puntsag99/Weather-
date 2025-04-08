"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export const Input = () => {
  const [countries, setCountries] = useState([]);
  const [userInput, setUserInput] = useState("");
  console.log("ene bol state country:", countries);

  const handleChanhe = (event) => {
    event.target.value;
  };

  useEffect(() => {
    async function fetchcountries() {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries"
        );
        const data = await response.json();
        console.log(data);
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
        type="text"
        placeholder="Search"
        className="font-bold text-[32px] w-full  outline-none"
      />
    </div>
  );
};
