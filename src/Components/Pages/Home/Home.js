import React from "react";
import classNames from "classnames/bind";
import style from "./home.module.css";
import Banner from "./Components/Banner/Banner";
import PopularCourse from "./Components/PopularCourse/PopularCourse";

const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx("container-fluid")}>
      <Banner />
      <PopularCourse />
    </div>
  );
}

export default Home;
