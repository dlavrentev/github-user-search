import React from "react";
import Image from "./../../../assets/profile.jpeg";
import Location from "./../../../assets/icon-location.svg";
import Website from "./../../../assets/icon-website.svg";
import Twitter from "./../../../assets/icon-twitter.svg";
import Company from "./../../../assets/icon-company.svg";

import "./../../cards/info/_info.scss";
import "./../../cards/info/_info-tablet.scss";

const Info = () => {
  return (
    <div className="info-container">
      <header className="info-header">
        <img src={Image} className="profile-img" alt="Profile" />
        <div>
          <h3>The Octocat</h3>
          <h4>@octocat</h4>
          <h4>Joined 25 Jan 2011</h4>
        </div>
      </header>
      <div className="info-body">
        <h4>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </h4>
        <div className="info-data">
          <div>
            <p>Repos</p>
            <h3>8</h3>
          </div>
          <div>
            <p>Followers</p>
            <h3>3938</h3>
          </div>
          <div>
            <p>Following</p>
            <h3>9</h3>
          </div>
        </div>
        <div className="info-footer">
          <div>
            <img src={Location} alt="Location" />
            <h4>San Francisco</h4>
          </div>
          <div>
            <img src={Website} alt="Website" />
            <h4>https://github.blog</h4>
          </div>
          <div>
            <img src={Twitter} alt="Twitter" />
            <h4>Not Available</h4>
          </div>
          <div>
            <img src={Company} alt="Company" />
            <h4>@github</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
