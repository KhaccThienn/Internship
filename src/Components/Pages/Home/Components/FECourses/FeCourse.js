import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./fe.module.css";
import axios from "axios";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function FeCourse() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9999/FECourse").then((res) => {
      setCourses(res.data);
    });
  }, []);
  return (
    <div>
      <div className={cx("home-fe", "mt-5")}>
        <h4 className="text-center font-weight-bold text-uppercase mb-2">
          Lộ Trình Học Front - End
        </h4>
        <div className="container-fluid">
          <div className="row">
            {courses.map((i) => {
              return (
                <div
                  className="col-lg-3 col-md-4 col-sm-12 cursor-pointer"
                  key={i.id}
                >
                  <Link to="" className="text-decoration-none">
                    <img src={i.image} alt="" className="card-img" />
                    <p
                      className={cx(
                        "home-text",
                        "text-center",
                        "font-weight-bold ",
                        " mt-2"
                      )}
                    >
                      {i.name}
                    </p>
                    <div className="d-flex">
                      <FaUsers />
                      <p className="pl-3">{i.members}</p>
                    </div>
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

export default FeCourse;
