import React from "react";
import Image from "./../../../assets/profile.jpeg";

import Location from "./../../../assets/icon-location.svg";
import Website from "./../../../assets/icon-website.svg";
import Twitter from "./../../../assets/icon-twitter.svg";
import Company from "./../../../assets/icon-company.svg";

const Info = () => {
  return (
    <div className="info-container">
      <header>
        <img src={Image} alt="Profile" />
        <div>
          <h3>THe Octocat</h3>
          <h4>@octocat</h4>
          <h4>Joined 25 Jan 2011</h4>
        </div>
      </header>
      <div>
        <h4>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </h4>
        <div>REPOS</div>
        <div>
          <div>
            <img src="" alt="" />
            <h4>San Francisco</h4>
          </div>
          <div>
            <img src="" alt="" />
            <h4>San Francisco</h4>
          </div>
          <div>
            <img src="" alt="" />
            <h4>San Francisco</h4>
          </div>
          <div>
            <img src="" alt="" />
            <h4>San Francisco</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
