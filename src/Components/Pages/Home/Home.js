import React from "react";
import classNames from "classnames/bind";
import style from "./home.module.css";
import Banner from "./Components/Banner/Banner";
import PopularCourse from "./Components/PopularCourse/PopularCourse";
import FeCourse from "./Components/FECourses/FeCourse";
import Target from "./Components/Target/Target";
import Upcome from "./Components/Upcome/Upcome";

const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx("container-fluid")}>
      <Banner />
      <PopularCourse />
      <FeCourse />
      <Target />
      <Upcome />
    </div>
  );
}

export default Home;
