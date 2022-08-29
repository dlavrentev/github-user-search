import React from "react";
import Moon from './../../assets/icon-moon.svg'

const Header = () => {
  return (
    <div className="container">
      <h1>
        devfinder
      </h1>
      <div>
         <h4>DARK</h4>
        <img src={Moon} alt="Moon" />
      </div>
    </div>
  );
};

export default Header;
