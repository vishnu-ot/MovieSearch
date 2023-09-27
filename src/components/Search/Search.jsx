import React, { useEffect, useState } from "react";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchList } from "./SearchList/SearchList";
import "./Search.css";
import axios from "axios";
export function Search() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchList, setSearchList] = useState([]);
  // const [fiteredList, setFilteredList] = useState([]);
  const API_URL =
    "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";

  const handleChange = (event) => {
    setSearchInputValue(event.target.value);

    // This method is used to local filter . Means initailly data render in browser and then filter this data .

    // const newFilteredList = searchList.filter((data) => {
    //   return data.title
    //     .toLowerCase()
    //     .includes(event.target.value.toLowerCase());
    // });
    // setFilteredList(newFilteredList);
  };

  const clearSearch = () => {
    // setFilteredList([]);
    setSearchList([]);
    setSearchInputValue("");
  };

  const fetchMovieList = async () => {
    const response = await axios(API_URL, {
      params: { query: searchInputValue },
    });
    setSearchList(response.data.results);
    // setFilteredList(response.data.results);
    // console.log("filtered list calling...,,..");
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchInputValue) {
        fetchMovieList();
      }
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInputValue]);
  return (
    <div className="search-container">
      <div className="heading-section">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
          alt=""
        />
        <h1>Looking for a movie?</h1>
      </div>
      <SearchInput
        searchInputValue={searchInputValue}
        handleChange={handleChange}
        clearSearch={clearSearch}
      />
      <SearchList searchList={searchList} />
    </div>
  );
}
