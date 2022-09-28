/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "./blog.module.css";
import classNames from "classnames/bind";
import logo from "~/Asset/logo.png";
import js from "~/Asset/javascript.png"
import {MdOutlineNavigateNext} from "react-icons/md"

const cx = classNames.bind(style);

function Blog() {
  return (
    <div>
      <div className={cx("main p-5")}>
        <div className={cx("heading")}>
          <h2>Bài Viết Nổi Bật</h2>
          <p>
            Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online
            và các kỹ thuật lập trình web.
          </p>
        </div>
        <div className={cx("maintain")}>
          <div className={cx("card-blog", "mb-5", "p-3")}>
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-7">
                <div className={cx("author", "d-flex", "align-items-center")}>
                  <div className={cx("avt")}>
                    <img
                      src={logo}
                      alt=""
                      className="card-img"
                    />
                  </div>
                  <div className={cx("name")}>
                    <p className="m-0">Hoai Khang</p>
                  </div>
                </div>
                <div className={cx("blog-heading")}>
                  <h4 className="font-weight-bold">
                    So Sánh JavaScript Với Những Đối Thủ Khác
                  </h4>
                </div>
                <div className={cx("blog-des")}>
                  <p>
                    Trong tương lai nếu bạn không nắm được JavaScript là gì thì
                    khó mà tiến xa được trong lĩnh vực công nghệ thông tin...
                  </p>
                </div>
                <div className={cx("readmore")}>
                  <a href="#">Doc Them <MdOutlineNavigateNext /></a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className={cx("thumpnail")}>
                  <img
                    src={js}
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={cx("card-blog", "mb-5", "p-3")}>
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-7">
                <div className={cx("author", "d-flex", "align-items-center")}>
                  <div className={cx("avt")}>
                    <img
                      src={logo}
                      alt=""
                      className="card-img"
                    />
                  </div>
                  <div className={cx("name")}>
                    <p className="m-0">Hoai Khang</p>
                  </div>
                </div>
                <div className={cx("blog-heading")}>
                  <h4 className="font-weight-bold">
                    So Sánh JavaScript Với Những Đối Thủ Khác
                  </h4>
                </div>
                <div className={cx("blog-des")}>
                  <p>
                    Trong tương lai nếu bạn không nắm được JavaScript là gì thì
                    khó mà tiến xa được trong lĩnh vực công nghệ thông tin...
                  </p>
                </div>
                <div className={cx("readmore")}>
                  <a href="#">Doc Them</a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className={cx("thumpnail")}>
                  <img
                    src={js}
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={cx("card-blog", "mb-5", "p-3")}>
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-7">
                <div className={cx("author", "d-flex", "align-items-center")}>
                  <div className={cx("avt")}>
                    <img
                      src={logo}
                      alt=""
                      className="card-img"
                    />
                  </div>
                  <div className={cx("name")}>
                    <p className="m-0">Hoai Khang</p>
                  </div>
                </div>
                <div className={cx("blog-heading")}>
                  <h4 className="font-weight-bold">
                    So Sánh JavaScript Với Những Đối Thủ Khác
                  </h4>
                </div>
                <div className={cx("blog-des")}>
                  <p>
                    Trong tương lai nếu bạn không nắm được JavaScript là gì thì
                    khó mà tiến xa được trong lĩnh vực công nghệ thông tin...
                  </p>
                </div>
                <div className={cx("readmore")}>
                  <a href="#">Doc Them</a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className={cx("thumpnail")}>
                  <img
                    src={js}
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={cx("card-blog", "mb-5", "p-3")}>
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-7">
                <div className={cx("author", "d-flex", "align-items-center")}>
                  <div className={cx("avt")}>
                    <img
                      src={logo}
                      alt=""
                      className="card-img"
                    />
                  </div>
                  <div className={cx("name")}>
                    <p className="m-0">Hoai Khang</p>
                  </div>
                </div>
                <div className={cx("blog-heading")}>
                  <h4 className="font-weight-bold">
                    So Sánh JavaScript Với Những Đối Thủ Khác
                  </h4>
                </div>
                <div className={cx("blog-des")}>
                  <p>
                    Trong tương lai nếu bạn không nắm được JavaScript là gì thì
                    khó mà tiến xa được trong lĩnh vực công nghệ thông tin...
                  </p>
                </div>
                <div className={cx("readmore")}>
                  <a href="#">Doc Them </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className={cx("thumpnail")}>
                  <img
                    src={js}
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
