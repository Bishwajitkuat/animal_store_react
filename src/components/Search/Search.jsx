import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <div className="searchDiv">
      <label htmlFor="searchInput">Search</label>
      <input
        onChange={props.inputHandler}
        value={props.searchInput}
        type="text"
        id="searchInput"
      />
    </div>
  );
};

export default Search;
