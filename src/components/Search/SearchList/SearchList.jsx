import React from "react";
import "./SearchList.css";
export function SearchList({ searchList }) {
  return (
    <div className="search-list-container">
      {searchList.map((data) => (
        <div className="search-items"  key={data.id }>
          <img
            width="50px"
            height="50px"
            style={{ objectFit: "contain" }}
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt=""
          />
          <p className="title">{data.title}</p>
        </div>
      ))}
    </div>
  );
}
