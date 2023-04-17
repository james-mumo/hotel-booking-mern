import "./hotelsSearchItem.css";
import React from "react";
import { Link } from "react-router-dom";

const HotelSearchItem = ({ item }) => {
  return (
    <div className="hotelSearchItemContainer">
      <img className="hotelItemImage" src={item.photos[0]} alt="" />

      <div className="hotelItemInfo">
        <div className="hotelItemHeader">{item.name}</div>
        <span>{item.distance}</span>
        <span className="hotelRide">Free Airport Taxi</span>
        <span style={{ fontWeight: "bold" }}>{item.desc}</span>
        <span className="hotelCancellation">Free Cancellation</span>
        <span className="hotelHurryMessage">
          Hurry up and Book and you can cancel later!
        </span>
      </div>
      {/*  */}
      {/*  */}
      <div className="hotelItemPricing">
        <div className="hotelItemRatingDiv">
          {item.ratingComment} <div className="ratingCard">{item.rating}</div>
        </div>
        <div className="hotelItemPricingLowerDiv">
          <div className="hotelPricingAmount">${item.cheapestPrice}</div>
          <div className="taxesAndVAT">Includes Taxes and fees</div>

          <Link to={`/hotels/${item._id}`}>
            <div className="seeAvailabilityButton">See Availability</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelSearchItem;
