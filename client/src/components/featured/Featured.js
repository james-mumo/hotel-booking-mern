import React from "react";
import "./featured.css";
import useFetch from "../../hooks/useFetch";
import apiList from "../../lib/apiList";

const Featured = () => {
  const { data, loading, error, reFetch } = useFetch(
    `${apiList.countHotelsByCity}`
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="./images/london.jpg"
              alt=""
              className="featuredItemImage"
            />
            <div className="featuredItemTitle">
              <h1>Nairobi</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>
          {/*  */}
          <div className="featuredItem">
            <img
              src="./images/NewYork.jpg"
              alt=""
              className="featuredItemImage"
            />
            <div className="featuredItemTitle">
              <h1>Malindi</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          {/*  */}
          <div className="featuredItem">
            <img
              src="./images/paris.jpg"
              alt=""
              className="featuredItemImage"
            />
            <div className="featuredItemTitle">
              <h1>Kampala</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
        </>
      )}
      {/*  */}
    </div>
  );
};

export default Featured;
