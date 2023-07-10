"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const SearchBar = ({ setResultSuggestion }) => {
  const [input, setInput] = useState("");

  //Featching Api Data from Search Input
  const fetchData = (value) => {
    fetch(`http://localhost:4001/api/v1/products/search/${input}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        value ? setResultSuggestion(json) : setResultSuggestion([]);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="flex text-center h-7">
      <input
        type="text"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        className=" border-gray-300 focus:border-gray-100  bg-slate-200 text-black pl-2 w-44 rounded-md"
        required
      />
      <Link href={`/query/${input}`}>
        <button onClick={()=>setResultSuggestion([])} className="Search pl-1 text-xl">
          <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
