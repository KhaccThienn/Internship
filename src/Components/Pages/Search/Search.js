import { Button } from "antd";
import classNames from "classnames/bind";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { GrMenu } from "react-icons/gr";
import { Link } from "react-router-dom";
import logo from "~/Asset/logo.png";
import style from "./search.module.css";

let cx = classNames.bind(style);


function Search() {

  return (
    <div>
      <h2 className="ketqua">Kết quả tìm kiếm cho : JavaScript</h2>

      <div className="container-fruid">
        <div className={cx("row", "p-0")}>
          <div className={cx("card", "col-lg-2", "card-timkiem")} >
            <img src="Data/image/java.png" className={cx("card-img-top", "p-0")} alt="..." />
            <div className={cx("card-body")}>
              <h5 className={cx("card-title")}>JavaScript cơ bản</h5>
              <p className={cx("card-text")}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className={cx("btn", "btn-danger", "bt-card")}>Xem Ngay</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;