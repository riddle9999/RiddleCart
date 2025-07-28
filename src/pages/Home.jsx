import React from "react";
import Ann from "../components/Ann";
import Category from "../components/Category";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const home = () => {
  return (
    <div>
      <Ann />
      <Navbar />
      <Slider />
      <Category />
    </div>
  );
};

export default home;
