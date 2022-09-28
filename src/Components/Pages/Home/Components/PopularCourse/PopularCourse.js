import React from 'react'
import classNames from 'classnames/bind'
import styled from "./popular.module.css"
import home1 from "~/Asset/home1.png";
import home2 from "~/Asset/home2.png";
import home3 from "~/Asset/home3.png";
import home4 from "~/Asset/home4.png";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styled)

function PopularCourse() {
  return (
    <div className={cx("container")}>
      <div className={cx("home-popular", "mt-4")}>
        <h4 className="text-center font-weight-bold mb-2">
          Những Khóa Học Phổ Biến Nhất
        </h4>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={home1} alt="" className="card-img" />
            <p className={cx("home-level", "mt-2")}>Basic</p>
            <p className="text-center font-weight-bold home-text">
              Khóa Học Kiến Thức Nền Tảng
            </p>
            <p>By: LuanNV.</p>
            <Link to="" className="btn btn-outline-dark text-center home-btn">
              Học Ngay!
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={home2} alt="" className="card-img" />
            <p className={cx("home-level", "mt-2")}>Advance</p>
            <p className="text-center font-weight-bold home-text text-truncate">
              Khóa Học Responsive Web Design
            </p>
            <p>By: LuongNA.</p>
            <Link to="" className="btn btn-outline-dark text-center home-btn">
              Học Ngay!
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={home3} alt="" className="card-img" />
            <p className={cx("home-level", "mt-2")}>Advance</p>
            <p className="text-center font-weight-bold home-text">
              Khóa Học Javascript Nâng Cao
            </p>
            <p>By: YenNTK.</p>
            <Link
              to="/upcomming"
              className="btn btn-outline-dark text-center home-btn"
            >
              Học Ngay!
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={home4} alt="" className="card-img" />
            <p className={cx("home-level", "mt-2")}>Advance</p>
            <p className="text-center font-weight-bold home-text">
              Khóa Học WSL / Ubuntu
            </p>
            <p>By: HauNV.</p>
            <Link
              to="/upcomming"
              className="btn btn-outline-dark text-center home-btn"
            >
              Học Ngay!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularCourse