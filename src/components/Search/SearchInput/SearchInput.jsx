import React from "react";
import "./SearchInput.css";
export function SearchInput() {
  return (
    <div className="search-input-container">
      <input type="text" placeholder="Searh movie here..." />
      <button>
        <img
          width="32px"
          height="32px"
          style={{objectFit:"contain"}}
          src="https://logowik.com/content/uploads/images/close1437.jpg"
          alt=""
        />
      </button>
    </div>
  );
}
