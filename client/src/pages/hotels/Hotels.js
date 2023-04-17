import React from "react";
import "./hotels.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import HotelSearchItem from "../../components/hotelSearchItem/HotelSearchItem";
import { server } from "../../lib/apiList";
import useFetch from "../../hooks/useFetch";

const Hotels = () => {
  const location = useLocation();

  const [openDateRangePicker, setOpenDateRangePicker] = useState(false);

  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, reFetch, error } = useFetch(
    `http://localhost:9999/api/hotels?city=${destination}&min=${min || 0}&max=${
      max || 999
    }`
  );
  // console.log(data);

  const handleClick = () => {
    reFetch();
  };
  return (
    <div className="hotelsComponent">
      <Navbar />
      <Header type={"list"} />
      <div className="hotelsContainer">
        <div className="hotelsSearch">
          <div className="hotelsSearchTitle">Search Hotel</div>
          <label htmlFor="">Destination</label>
          <input
            type="text"
            placeHolder={destination}
            name=""
            id=""
            className="hotelsDestination"
          />
          <label htmlFor="">Check-in Date</label>
          <span
            className="hotelsCheckInDate"
            onClick={() => setOpenDateRangePicker(!openDateRangePicker)}
          >
            {`${format(dates[0].startDate, "MM/dd/yy")}`} To{" "}
            {`${format(dates[0].endDate, "MM/dd/yy")}`}
          </span>
          {openDateRangePicker && (
            <DateRange
              onChange={(item) => setDates([item.selection])}
              minDate={new Date()}
              ranges={dates}
            />
          )}
          <div className="hotelsSearchTitle">Options</div>
          <div className="hotelSearchOptionsDiv">
            <div className="hotelSearchOptionsDivItem">
              <label htmlFor="">
                Min Price <small>per night</small>
              </label>
              <input
                type="text"
                onChange={(e) => setMin(parseInt(e.target.value) - 1)}
              />
            </div>

            <div className="hotelSearchOptionsDivItem">
              <label htmlFor="">
                Max Price <small>per night</small>
              </label>
              <input
                type="text"
                name=""
                id=""
                onChange={(e) => setMax(parseInt(e.target.value) + 1)}
              />
            </div>

            <div className="hotelSearchOptionsDivItem">
              <label htmlFor="">Adults</label>
              <input min={1} type="number" placeholder={options.adults} />
            </div>

            <div className="hotelSearchOptionsDivItem">
              <label htmlFor="">Children</label>
              <input type="number" min={0} placeholder={options.children} />
            </div>

            <div className="hotelSearchOptionsDivItem">
              <label htmlFor="">Rooms</label>
              <input type="number" min={1} placeholder={options.rooms} />
            </div>
          </div>

          <button className="hotelsSearchButton" onClick={handleClick}>
            Search
          </button>
        </div>

        {/*  */}
        {/*  */}
        <div className="hotelResults">
          {loading ? (
            "loading..."
          ) : (
            <>
              {data.map((searchItem) => (
                <HotelSearchItem item={searchItem} key={searchItem._id} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
