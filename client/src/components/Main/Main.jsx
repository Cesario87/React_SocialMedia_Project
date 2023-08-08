// import React from "react";
import Feed from './Feed';
import Profile from './Profile';
import Upload from './Upload';
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return <main>
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  </main>;
};

export default Main;
