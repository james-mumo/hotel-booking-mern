import "./propertyTypes.css";

import React from "react";
import useFetch from "../../hooks/useFetch";
import apiList from "../../lib/apiList";

const PropertyTypes = () => {
  const { data, loading, error, reFetch } = useFetch(
    `${apiList.countHotelsByType}`
  );

  const images = [
    "./images/room_deluxe.jpg",
    "./images/atrium.jpg",
    "./images/room_single.jpg",
    "./images/house1.jpg",
    "./images/house_arch.jpg",
  ];

  return (
    <div className="propertyTypes">
      <h2>Browse By Property Types</h2>
      <div className="propertyTypesItems">
        {/*  */}
        {loading ? (
          "Loading...."
        ) : (
          <>
            {data &&
              images.map((image, i) => (
                <div className="propertTypeItem" key={i}>
                  <img src={image} alt="" className="propertTypeItemCategory" />
                  <span className="propertTypeTitle">{data[i]?.type}</span>
                  <span className="propertTypeNumber">
                    {data[i]?.count} {data[i]?.type}
                  </span>
                </div>
              ))}
          </>
        )}
        {/*  */}
      </div>
    </div>
  );
};

export default PropertyTypes;
