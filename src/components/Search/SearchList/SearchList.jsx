import React from "react";
import "./SearchList.css";
export function SearchList() {
  return (
    <div className="search-list-container">
      <div className="search-items">
        <img
          width="50px"
          height="50px"
          style={{ objectFit: "contain" }}
          src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
          alt=""
        />
        <p className="title">tttt</p>
      </div>
      <div className="search-items">
        <img
          style={{ objectFit: "contain" }}
          src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
          alt=""
          width="50px"
          height="50px"
        />
        <p className="title">Title</p>
      </div>
    </div>
  );
}
