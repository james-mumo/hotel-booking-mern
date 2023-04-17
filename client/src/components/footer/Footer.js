import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerRegionsContainer">
        <ul className="footerRegions">
          <li className="footerRegionItem">Malindi</li>
          <li className="footerRegionItem">Kilfi</li>
          <li className="footerRegionItem">Embu</li>
        </ul>
        <ul className="footerRegions">
          <li className="footerRegionItem">Longonot</li>
          <li className="footerRegionItem">Naivasha</li>
          <li className="footerRegionItem">Mt Kenya</li>
        </ul>
        <ul className="footerRegions">
          <li className="footerRegionItem">Eldoret</li>
          <li className="footerRegionItem">Nairobi</li>
          <li className="footerRegionItem">Ukunda</li>
        </ul>
      </div>
      <div className="footerCopyRightContainer">Made By james-mumo98😎</div>
    </div>
  );
};

export default Footer;
