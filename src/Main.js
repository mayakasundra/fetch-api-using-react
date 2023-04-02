import React from "react";
import { NavLink } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <>
      <div className="main p-3 m-5" style={{ backgroundColor: "#1976d2" }}>
        <NavLink
          to="/"
          activeStyle
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bolder",
          }}
        >
          Home
        </NavLink>
      </div>
    </>
  );
};

export default Main;
