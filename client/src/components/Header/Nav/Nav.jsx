// import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return <div>
    <Link to="/">Home</Link>
  <Link to="/profile">Profile</Link>
  <Link to="/upload">Upload</Link> 
  </div>;
};

export default Nav;
