import React from 'react'
import banner from "~/Asset/Component 32.png";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./banner.module.css";

const cx = classNames.bind(style);

function Banner() {
  return (
    <div>
      <div className={cx("banner", "m-auto")}>
        <img src={banner} alt="..." className={cx("card-img")} />
        <div className={cx("text-overlays")}>
          <p className={cx("slogan")}>Chúng Tôi Là F9</p>
          <p className={cx("slogan2")}>
            F9 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và
            có những con người yêu thích lập trình F9 sẽ ở đó.
          </p>
          <Link
            to=""
            className={cx("learn-btn", "text-white", "text-decoration-none")}
          >
            Học Ngay
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner