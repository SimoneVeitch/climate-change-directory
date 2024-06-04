import React from "react";

function Search( {onSearch} ) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };
 
  return (
    <div className="filter">
      <input id="search-bar" type="text" placeholder="Search Notes" onChange={handleChange}/>
    </div>
  );
}

export default Search;