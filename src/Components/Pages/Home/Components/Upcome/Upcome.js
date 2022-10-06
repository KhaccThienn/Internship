import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styled from "./upcome.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const cx = classNames.bind(styled);

function Upcome() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9999/uppcommingCourse")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="home-expect mt-5">
        <h4 className="text-center font-weight-bold text-uppercase">
          Các khóa học dự kiến
        </h4>
        <div className="container">
          <div className="row justify-content-between">
            {courses.map((items, index) => {
              return (
                <div className={cx("col-lg-4", "course")} key={index}>
                  <Link to="/upcomming">
                    <img src={items.image} alt="" className="card-img" />
                    <p className="text-center">{items.update}</p>
                    <h5 className="text-center">{items.name}</h5>
                    <p className={cx('pricee')}>
                      {items.price} vnd
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upcome;
