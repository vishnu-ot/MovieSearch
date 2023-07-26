import React from "react";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchList } from "./SearchList/SearchList";
import "./Search.css";

export function Search() {
  return (
    <div className="search-container">
      <div className="heading-section">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
          alt=""
        />
        <h1>Looking for a movie?</h1>
      </div>
      <SearchInput />
      <SearchList />
    </div>
  );
}
