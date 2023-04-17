import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./hotel.css";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import apiList from "../../lib/apiList";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [openModal, setOpenModal] = useState(false);

  const { data, loading, reFetch, error } = useFetch(
    `${apiList.getSingleHotel}/${id}`
  );

  const { dates, options } = useContext(SearchContext);
  console.log(options.rooms);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <Navbar />
      <Header type={"list"} />
      <div className="singleHotelContainer">
        {loading ? (
          "Loading...."
        ) : (
          <>
            <div className="singleHotelDiv">
              <div className="topHotelInfoDiv">
                <button className="reserveOrBookButton">
                  Reserve or Book Now
                </button>
                <div className="hotelTitle">{data.title}</div>
                <div className="hotelAddress">{data.address}</div>
                <div className="hotelDistance">{data.distance} from Center</div>
                <div className="bookAHotelInfo">{data.desc}</div>
              </div>
              <div className="hotelImages"></div>
              <div className="bottomHotelDiv">
                {/*  */}
                <div className="bottomInfoText">
                  <div className="hotelTitle">{data.name}</div>
                  <br />
                  <div className="hotelAddress padding">{data.desc}</div>
                </div>

                <div className="bottomReserveOrBookDiv">
                  <div className="hotelDistanc grayColor">
                    Perfect For A ({days})-Night Stay
                  </div>
                  <div className="hotelAddress">
                    Located in {data.address}All Socila Amenities are present.
                  </div>
                  <div className="hotelTitle">
                    ${days * data.cheapestPrice * options.rooms}
                    <span style={{ fontWeight: "100" }}>({days} Nights)</span>
                  </div>
                  <button
                    onClick={handleClick}
                    className="bottomReserveOrBookButton"
                  >
                    Reserve or Book Now
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
      </div>
    </div>
  );
};

export default Hotel;
