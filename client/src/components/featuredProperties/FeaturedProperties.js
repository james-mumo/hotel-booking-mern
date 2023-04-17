import "./featuredProperties.css";
import React from "react";
import apiList from "../../lib/apiList";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(`${apiList.getAllHotels}`);
  return (
    <div className="propertyTypes">
      <h2>Home Guests Love</h2>
      <div className="likedPropertyTypesItems">
        {/*  */}
        {/*  */}
        {/*  */}
        {loading ? (
          "Loading...."
        ) : (
          <>
            {data.map((property) => (
              <div className="likedPropertTypeItem" key={property._id}>
                <img
                  src={property.photos[0]}
                  alt=""
                  className="likedPropertTypeItemImage"
                />
                <div className="likedPropertTypeItemText">
                  <span className="likedPropertTypeTitle">{property.name}</span>
                  <span className="likedPropertTypeNumber">
                    {property.city}
                  </span>
                  <span
                    style={{ fontWeight: "bold" }}
                    className="likedPropertTypeNumber"
                  >
                    Starting from ${property.cheapestPrice}
                  </span>
                  <span className="likedPropertyItemRatingContainer">
                    <span className="likedItemRatingSpan">
                      {property.rating}
                    </span>
                    <span>{property.ratingComment}</span>
                  </span>
                </div>
              </div>
            ))}
          </>
        )}
        {/*  */}
        {/*  */}
        {/*  */}
      </div>
    </div>
  );
};

export default FeaturedProperties;
