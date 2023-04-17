import "./mailList.css";

import React from "react";

const MailList = () => {
  return (
    <div className="mailListContainer">
      <div className="mailListHeader">Save time, save money!</div>
      <div className="mailListSubHeader">
        Sign up and we'll send you our Best Deals to You ..typewriter over here
      </div>
      <div className="mailListInput">
        <input type="text" name="" id="" placeholder="Enter Your Email" />
        <button type="submit">Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
