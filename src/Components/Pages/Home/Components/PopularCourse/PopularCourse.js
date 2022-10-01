import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styled from "./popular.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const cx = classNames.bind(styled);

function PopularCourse() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9999/thumpCourse").then((res) => {
      console.log(course);
      setCourse(res.data);
    });
  }, []);

  return (
    <div className={cx("container")}>
      <div className={cx("home-popular", "mt-4")}>
        <h4 className="text-center font-weight-bold mb-2">
          Những Khóa Học Phổ Biến Nhất
        </h4>
        <div className="row">
          {course.map((items, index) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                <img src={items.img} alt="" className="card-img" />
                <p className={cx("home-level", "mt-2")}>{items.level}</p>
                <p className={cx("text-center", "font-weight-bold", "home-text", "text-truncate")}>
                  {items.name}
                </p>
                <p>By: { items.author }</p>
                <Link
                  to=""
                  className="btn btn-outline-dark text-center home-btn"
                >
                  Học Ngay!
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PopularCourse;
