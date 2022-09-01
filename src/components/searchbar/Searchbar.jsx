import React from "react";
import "./../searchbar/_searchbar.scss";
import "./../searchbar/_searchbar-tablet.scss";
import "./../searchbar/_searchbar-desktop.scss";
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
