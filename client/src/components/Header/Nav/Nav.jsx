// import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return <div>
    {/* <Link to="/">Login</Link> */}
    <Link to="/feed">Feed</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/upload">Upload</Link>
    <Link to="/search">Search</Link>
    <Link to="/menu">Menu</Link>
  </div>;
};

export default Nav;
