import React from "react";

const Search = (props) => {
  return (
    <div className="searchDiv">
      <label htmlFor="searchInput">Search</label>
      <input onChange={props.inputHandler} type="text" id="searchInput" />
    </div>
  );
};

export default Search;
