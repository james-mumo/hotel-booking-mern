import React, { useState } from "react";
import "./header.css";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
  faCocktail,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
//get the js date from the dat range picker into readbale date use the fns
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const navigate = useNavigate();

  const handleOptions = (name, operation) => {
    setOptions((prevState) => {
      return {
        ...prevState,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "New_Search", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div className="headerContainer">
      {" "}
      <div className="options">
        <div className="optionItem">
          <FontAwesomeIcon className="fontAwesomeIconStyle" icon={faBed} />
          <span>Stays</span>
        </div>
        <div className="optionItem">
          <FontAwesomeIcon className="fontAwesomeIconStyle" icon={faPlane} />
          <span>Flights</span>
        </div>
        <div className="optionItem">
          <FontAwesomeIcon className="fontAwesomeIconStyle" icon={faCar} />
          <span>Car Rentals</span>
        </div>
        <div className="optionItem">
          <FontAwesomeIcon className="fontAwesomeIconStyle" icon={faCocktail} />
          <span>Tours</span>
        </div>
        <div className="optionItem">
          <FontAwesomeIcon className="fontAwesomeIconStyle" icon={faTaxi} />
          <span>Taxis</span>
        </div>
      </div>
      {/*  */}
      {type !== "list" && (
        <>
          <div className="headerText">
            Get To Experince A LifeTime Experince Made Of
            <span className="typeWriter">
              Great, Amazing, MasterClass, TopNotch,UnMatched Services
            </span>
          </div>
          <div className="headerSearch">
            <div className="headerSearchItems">
              <div className="headerSearchItem">
                <FontAwesomeIcon
                  className="fontAwesomeIconStyle"
                  icon={faBed}
                />
                <input
                  type="text"
                  placeholder="Where Are You Going"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon
                  className="fontAwesomeIconStyle"
                  icon={faCalendarDays}
                />
                <span
                  onClick={() => setOpenDatePicker(!openDatePicker)}
                  className="headerSearchInput"
                >
                  {`${format(dates[0].startDate, "MM/dd/yy")}`} to{" "}
                  {`${format(dates[0].endDate, "MM/dd/yy")}`}
                </span>
                {openDatePicker && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="dateRangePicker"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon
                  className="fontAwesomeIconStyle"
                  icon={faPerson}
                />

                <span
                  className="headerSearchInput"
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  {`${options.adults} Adult . ${options.children} Children . ${options.rooms} Rooms`}
                </span>

                {/*  */}
                {openOptions && (
                  <div className="headerSearchOptions">
                    <div className="headerSearchOptionItem">
                      <span className="headerSearchOptionItemTitle">
                        Adults
                      </span>
                      <div className="headerSearchOptionItemCounter">
                        <button
                          disabled={options.adults <= 1}
                          className="headerSearchOptionCounterButton"
                          onClick={() => handleOptions("adults", "d")}
                        >
                          -
                        </button>
                        <div className="headerSearchOptionItemText">
                          {options.adults}
                        </div>
                        <button
                          className="headerSearchOptionCounterButton"
                          onClick={() => handleOptions("adults", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="headerSearchOptionItem">
                      <span className="headerSearchOptionItemTitle">
                        Children
                      </span>
                      <div className="headerSearchOptionItemCounter">
                        <button
                          disabled={options.children < 1}
                          className="headerSearchOptionCounterButton"
                          onClick={() => handleOptions("children", "d")}
                        >
                          -
                        </button>
                        <div className="headerSearchOptionItemText">
                          {options.children}
                        </div>
                        <button
                          className="headerSearchOptionCounterButton"
                          onClick={() => handleOptions("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="headerSearchOptionItem">
                      <span className="headerSearchOptionItemTitle">Rooms</span>
                      <div className="headerSearchOptionItemCounter">
                        <button
                          disabled={options.rooms <= 1}
                          className="headerSearchOptionCounterButton"
                          onClick={() => handleOptions("rooms", "d")}
                        >
                          -
                        </button>
                        <div className="headerSearchOptionItemText">
                          {options.rooms}
                        </div>
                        <button
                          className="headerSearchOptionCounterButton"
                          onClick={() => handleOptions("rooms", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {/*  */}
              </div>

              <div className="headerSearchItem">
                <button className="headerSearchButton" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Header;
