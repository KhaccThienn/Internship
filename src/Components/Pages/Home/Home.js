import React from "react";
import classNames from "classnames/bind";
import style from "./home.module.css";
import Carousels from "./Components/Carousel/Carousel";

const cx = classNames.bind(style);

const videos = [
  "https://www.youtube.com/embed/9KIub8JNcXg?list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q",
];

function Home() {
  return (
    <div className={cx("text-danger", "container-fluid")}>
      {videos.map((item, i) => {
        return (
          <iframe
            width="100%"
            height="720"
            src={item}
            title="Tái Cấu Trúc Và Tối Ưu Code #1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        );
      })}
      {/* <Carousels /> */}
    </div>
  );
}

export default Home;
