import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      {/* //topNavbarContainer */}
      <div className="topNavbarContainer">
        <div className="logo">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <span>EazyBook</span>
          </Link>
        </div>
        {user ? (
          <>
            <div className="accountButtons">
              <h3 className="accountButtonsRegister">{user.username}</h3>
              <button className="accountButtonsRegister">Logout</button>
            </div>
          </>
        ) : (
          <>
            <div className="accountButtons">
              <Link to={"/login"}>
                <button button className="accountButtonsLogin">
                  Login
                </button>
              </Link>
              <button className="accountButtonsRegister">Register</button>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
