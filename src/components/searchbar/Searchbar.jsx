import React from "react";
import "./../searchbar/_searchbar.scss";
import Search from "./../../assets/icon-search.svg";

const Searchbar = () => {
  return (
    <div className="searchbar-container">
      <img src={Search} alt="Lupe" />
      <input type="text" placeholder="Search GitHub username..." />
      <button>Search</button>
    </div>
  );
};

export default Searchbar;
