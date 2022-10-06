import React from "react";
import classNames from "classnames/bind";
import styled from "./target.module.css";
import { FaRegLightbulb } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc"
import { FcComboChart } from "react-icons/fc"
import {GiCardboardBoxClosed} from "react-icons/gi"

const cx = classNames.bind(styled);

function Target() {
  return (
    <div>
      <div className={cx("home-target", "mt-5", "container-fluid", "p-5")}>
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h5 className={cx("text-uppercase", "home-textta", "mt-5", "ml-5")}>
              Làm trước học sau
            </h5>
            <h3 className="text-uppercase ml-5 mt-4 mb-5">
              Đạt được mục tiêu của bạn
            </h3>
          </div>
          <div className="col-lg-8 container-fluid">
            <div className="row">
              <div className="col-lg-3 container">
                <div className={cx("row", "justify-content-center", "icons")}>
                  <FaRegLightbulb />
                </div>
                <h4 className="text-center">253,085</h4>
                <p className="text-center">Học sinh đã đăng ký</p>
              </div>

              <div className="col-lg-3 container">
                <div className={cx("row", "justify-content-center", "icons")}>
                  <VscLibrary />
                </div>
                <h4 className="text-center">253,085</h4>
                <p className="text-center">Học sinh đã đăng ký</p>
              </div>

              <div className="col-lg-3 container">
                <div className={cx("row", "justify-content-center", "icons")}>
                  <FcComboChart />
                </div>
                <h4 className="text-center">88%</h4>
                <p className="text-center">
                  Người học báo cáo lợi ích nghề nghiệp
                </p>
              </div>

              <div className="col-lg-3 container">
                <div className={cx("row", "justify-content-center", "icons")}>
                  <GiCardboardBoxClosed />
                </div>
                <h4 className="text-center">5000+</h4>
                <p className="text-center">
                  Các khóa học từ những giảng viên hàng đầu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Target;
