import React from "react";
import classNames from "classnames/bind";
import style from "./Road.module.css";
import be from "~/Asset/be.png"
import fe from "~/Asset/fe.png"
import grcard from "~/Asset/fb-group-card.png";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function Road() {
  return (
    <div className="container-fluid p-4">
      <div className="heading">
        <h2 className="font-weight-bold">Lộ Trình Học</h2>
        <p>
          Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học.
          Ví dụ: Để đi làm với vị trí “Lập trình viên Front-end” bạn nên tập
          trung vào lộ trình “Front-end”.
        </p>
      </div>

      <div className={cx("main-content")}>
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center">
            <div
              className={cx(
                "col-lg-6",
                "row",
                "align-items-center",
                "card-road",
                "p-5"
              )}
            >
              <div className="col-lg-8">
                <h3>Lộ Trình Học Front - End</h3>
                <p className={cx("des")}>
                  Lập trình viên Front-end là người xây dựng ra giao diện
                  websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở
                  thành lập trình viên Front-end nhé.
                </p>
                <Link to="/frontend" className={cx("btn", "btn-checkout")}>
                  Xem Chi Tiết
                </Link>
              </div>
              <div className="col-lg-4 ">
                <div className={cx("LearningPathItem_thumb-wrap")}>
                  <a
                    className={cx("LearningPathItem_thumb-round")}
                    href="detailRoad.html"
                  >
                    <img
                      className={cx("LearningPathItem_thumb")}
                      src={fe}
                      alt="..."
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              className={cx(
                "col-lg-6",
                "row",
                "align-items-center",
                "card-road",
                "p-5"
              )}
            >
              <div className="col-lg-8">
                <h3>Lộ Trình Học Back - End</h3>
                <p className={cx("des")}>
                  Trái với Front-end thì lập trình viên Back-end là người làm
                  việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng
                  ta sẽ tìm hiểu thêm về lộ trình học Back-end nhé.
                </p>
                <Link to="/upcomming" className={cx("btn", "btn-checkout")}>
                  Xem Chi Tiết
                </Link>
              </div>
              <div className="col-lg-4">
                <div className={cx("LearningPathItem_thumb-wrap")}>
                  <a
                    className={cx("LearningPathItem_thumb-round")}
                    href="upcomming.html"
                  >
                    <img
                      className={cx("LearningPathItem_thumb")}
                      src={be}
                      alt="..."
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-between align-items-center">
            <div className="col-lg-6">
              <h1>Tham gia cộng đồng học viên của chúng tôi trên Facebook</h1>
              <p>
                Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham
                gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.
              </p>
              <Link
                to="https://www.facebook.com/"
                className={cx("btn", "btn-checkout")}
              >
                Tham Gia Ngay
              </Link>
            </div>
            <div className="col-lg-6">
              <img src={grcard} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Road;
