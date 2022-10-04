import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./learn.module.css";
import classNames from "classnames/bind";
import hau from "~/Asset/hau_ngo.jpg";
import luannv from "~/Asset/gv_nguyen_van_luan.jpg";

const cx = classNames.bind(style);

function Learn() {
  const [urlCourse, setUrlCourse] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:9999/course")
      .then((res) => {
        console.log(urlCourse);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className={cx("main p-5")}>
        <div className="text-center">
          <div className="h2">Khóa Học: Xây dựng web bằng HTML 5 - CSS 3</div>
        </div>
        <p>Bài 1: Giới Thiệu Về Khóa Học</p>
        <div className={cx("video")}>
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/pQN-pnXPaVg"
            title="HTML Full Course - Build a Website Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className={cx("description")}>
          <div className={cx("update")}>
            <p>Cập Nhật Ngày 01/08/2020</p>
            <p>Powered by F9 - Bachkhoa Aptech</p>
          </div>
          <div className={cx("detailss")}>
            <p className="font-weight-bold h3">Chi Tiết Bài Học:</p>
            <div className={cx("list")}>
              <ul className="ml-3 d-inline-block">
                <li>Giảng Viên: Nguyễn Văn Luận</li>
                <li>Thời Gian: 18 Phút</li>
                <li>
                  Nội Dung: Giới Thiệu Về Khóa Học, Ngôn Ngữ Đánh Dấu Siêu Văn
                  Bản HTML5
                </li>
              </ul>
            </div>

            <p className="font-weight-bold h3 mt-4">Yêu Cầu Sau Bài Học:</p>
            <div className={cx("list")}>
              <ul className="ml-3 d-inline-block">
                <li>Nắm bắt rõ được tiêu chí học tập</li>
                <li>Hiểu và biết được HTML là gì, ý nghĩa của HTML</li>
                <li>Làm đầy đủ bài tập</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={cx("exc")}>
          <p className="font-weight-bold h3">Bài Tập Làm Thêm</p>

          <div className={cx("form-exc")}>
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className={cx("col-lg-1", "list-ques")}>
                  <ul className="mb-0">
                    <li>C1</li>
                    <li>C2</li>
                    <li>C3</li>
                    <li>C4</li>
                  </ul>
                </div>
                <div className="col-lg-11">
                  <div className={cx("headingg")}>
                    <p className="h5">Câu 1: HTML viết tắt cho cụm từ</p>
                  </div>

                  <div className="ans">
                    <div className="ans-gr">
                      <input type="checkbox" name="" id="check1" />
                      <label htmlFor="check1">Hypertext Markup Language</label>
                    </div>
                    <div className="ans-gr">
                      <input type="checkbox" name="" id="check2" />
                      <label htmlFor="check2">Home Tool Markup Language</label>
                    </div>
                    <div className="ans-gr">
                      <input type="checkbox" name="" id="check3" />
                      <label htmlFor="check3">
                        Hyperlinks and Texts Markup Language
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cx("cmt")}>
          <div className={cx("head")}>
            <h4>Hỏi Đáp Về Bài Giảng</h4>
          </div>
          <div className={cx("main-cmt")}>
            <div className={cx("form-cmt")}>
              <p className="font-weight-bold">Đăng Câu Hỏi Của Bạn...</p>

              <div className={cx("form-gr")}>
                <form action="#" className="">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Tiêu Đề ( bắt buộc )"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Nội Dung ( bắt buộc )"
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Đăng
                  </button>
                </form>
                <div className={cx("border-custom")}></div>
              </div>

              <div className={cx("cmttt")}>
                <div className={cx("cmt-gr", "mt-4")}>
                  <div className={cx("user")}>
                    <div className={cx("avt")}>
                      <img src={hau} className="card-img" alt="" />
                    </div>
                    <div className={cx("text")}>
                      <p className={cx("username font-weight-bold")}>
                        Ngo Van Hau
                      </p>
                      <p>Có phải tất cả các thẻ HTML đều có thẻ đóng?</p>
                    </div>
                  </div>
                  <div className={cx("user", "ml-5", "mt-3")}>
                    <div className={cx("avt")}>
                      <img
                        src={luannv}
                        className="card-img"
                        alt=""
                      />
                    </div>
                    <div className={cx("text")}>
                      <p className={cx("username", "font-weight-bold")}>
                        LuanNV
                      </p>
                      <p>
                        Không. Có một vài thẻ trong html mà không cần phải đóng
                        thẻ ví dụ thẻ image, hr, br
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cx("cmt-gr", "mt-4")}>
                  <div className={cx("user")}>
                    <div className={cx("avt")}>
                      <img src={hau} className="card-img" alt="" />
                    </div>
                    <div className={cx("text")}>
                      <p className={cx("username", "font-weight-bold")}>
                        Ngo Van Hau
                      </p>
                      <p>Có phải tất cả các thẻ HTML đều có thẻ đóng?</p>
                    </div>
                  </div>
                  <div className={cx("user", "ml-5", "mt-3")}>
                    <div className={cx("avt")}>
                      <img
                        src={luannv}
                        className="card-img"
                        alt=""
                      />
                    </div>
                    <div className={cx("text")}>
                      <p className={cx("username", "font-weight-bold")}>
                        LuanNV
                      </p>
                      <p>
                        Không. Có một vài thẻ trong html mà không cần phải đóng
                        thẻ ví dụ thẻ image, hr, br
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cx("cmt-gr", "mt-4")}>
                  <div className={cx("user")}>
                    <div className={cx("avt")}>
                      <img src={hau} className="card-img" alt="" />
                    </div>
                    <div className={cx("text")}>
                      <p className={cx("username", "font-weight-bold")}>
                        Ngo Van Hau
                      </p>
                      <p>Có phải tất cả các thẻ HTML đều có thẻ đóng?</p>
                    </div>
                  </div>
                  <div className={cx("user", "ml-5", "mt-3")}>
                    <div className={cx("avt")}>
                      <img
                        src={luannv}
                        className="card-img"
                        alt=""
                      />
                    </div>
                    <div className={cx("text")}>
                      <p className={cx("username", "font-weight-bold")}>
                        LuanNV
                      </p>
                      <p>
                        Không. Có một vài thẻ trong html mà không cần phải đóng
                        thẻ ví dụ thẻ image, hr, br
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
