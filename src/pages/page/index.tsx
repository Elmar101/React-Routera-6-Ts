import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <div>Home Layout</div>
       <div style={{marginBottom: "50px"}}>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "homeActive" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              background: isActive ? "blue" : "transparent",
            })}
          >
            About
          </NavLink>
          <NavLink to="/news">
            {({ isActive }) => <>News {isActive && 'Aktiv'}</>}
          </NavLink>
          <NavLink to='/blog'> Blog </NavLink>
          <NavLink to='/profile'> Profile </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
