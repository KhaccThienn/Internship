import React from "react";
import classNames from "classnames/bind";
import style from "./About.module.css";
import gv_pham_xuan_hien from "~/Asset/gv_pham_xuan_hien.jpg";
import gv_nguyen_van_luan from "~/Asset/gv_nguyen_van_luan.jpg";
import gv_nguyen_anh_luong from "~/Asset/gv_nguyen_anh_luong.jpg";
import le_thien from "~/Asset/le_thien.jpg";
import yen from "~/Asset/yen.jpg";
import hau_ngo from "~/Asset/hau_ngo.jpg";

const cx = classNames.bind(style);

function About() {
  return (
    <div className="container">
      <div className={cx("about-top")}>
        <h3 className="font-weight-bold text-center">Chúng Tôi Là F9</h3>
        <p className={cx("text-center", "about-text")}>
          Sứ mệnh của chúng tôi là đem đến cho các bạn những khóa học mới nhất,
          chất lượng nhất, và phù hợp với mọi người.
        </p>
        <p className={cx("text-center", "about-text")}>
          Chúng tôi đang nỗ lực đổi mới bản thân từng ngày, để F9 trở thành một
          nơi mà các bạn có thể tin tưởng, theo dõi.
        </p>
        <p className={cx("text-center", "about-text")}>
          Khởi đầu là một nhóm nhỏ tại Bachkhoa-Aptech, chúng tôi có những ước
          mơ lớn. Niềm đam mê của chúng tôi đối với CNTT, chúng tôi cung cấp cho
          khách hàng không gì khác ngoài chất lượng sản phẩm cao nhất, đảm bảo
          đáp ứng nhu cầu của họ và khiến họ hài lòng!
        </p>
      </div>

      <div className="about-teacher mt-5">
        <h3 className="font-weight-bold text-center">Lãnh Đạo Của Chúng Tôi</h3>
        <div className="row mt-4">
          <div className="col-lg-4 col-md-4 col-sm-12 rounded">
            <img src={gv_pham_xuan_hien} alt="..." className="card-img" />
            <p className={cx("text-center", "font-about", "mt-2")}>
              Giảng viên Phạm Xuân Hiền
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 rounded">
            <img src={gv_nguyen_van_luan} alt="..." className="card-img" />
            <p className={cx("text-center", "font-about", "mt-2")}>
              Giảng viên Nguyễn Văn Luận
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 rounded">
            <img src={gv_nguyen_anh_luong} alt="..." className="card-img" />
            <p className={cx("text-center", "font-about", "mt-2")}>
              Giảng viên Nguyễn Anh Lương
            </p>
          </div>
        </div>
      </div>

      <div className="about-team mt-5">
        <h3 className="font-weight-bold text-center">
          Những Thành Viên Của Chúng Tôi
        </h3>
        <div className="row mt-4">
          <div className={cx("col-lg-4", "col-md-4", "col-sm-12", "img-team")}>
            <img
              src={le_thien}
              alt="..."
              className={cx("card-img", "about-img")}
            />
            <p className={cx("text-center", "font-about", "mt-2")}>
              Team Leader Lê Khắc Thiện
            </p>
          </div>

          <div className={cx("col-lg-4", "col-md-4", "col-sm-12", "img-team")}>
            <img
              src={hau_ngo}
              alt="..."
              className={cx("card-img", "about-img")}
            />
            <p className={cx("text-center", "font-about", "mt-2")}>
              Ngô Văn Hậu
            </p>
          </div>
          <div className={cx("col-lg-4", "col-md-4", "col-sm-12", "img-team")}>
            <img src={yen} alt="..." className={cx("card-img", "about-img")} />
            <p className={cx("text-center", "font-about", "mt-2")}>
              Nguyễn Thị Kim Yến
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
