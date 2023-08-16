// import React from "react";
import Login from '../Login';
import Feed from './Feed';
import Profile from './Profile';
import Upload from './Upload';
import Search from './Search';
import Menu from './Menu';
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return <main>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/search" element={<Search />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  </main>;
};

export default Main;
