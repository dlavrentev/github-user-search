import React from "react";
import Image from "./../../../assets/profile.jpeg";

const Info = () => {
  return (
    <div className="info-container">
      <div>
        <img src={Image} alt="Profile" />
        <div>
          <h3>THe Octocat</h3>
          <h4>@octocat</h4>
          <h4>Joined 25 Jan 2011</h4>
        </div>
      </div>
    </div>
  );
};

export default Info;
