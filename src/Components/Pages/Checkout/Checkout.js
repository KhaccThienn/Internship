import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styled from "./checkout.module.css";
import { BsTrash } from "react-icons/bs";
import tech from "~/Asset/tech.png";
import momo from "~/Asset/MoMo_Logo.png";
import mb from "~/Asset/mbbank-logo.png";
import tp from "~/Asset/tp.png";
import qr from "~/Asset/qr.png";
import axios from "axios";

const cx = classNames.bind(styled);

function Checkout() {
  const [carts, setCarts] = useState([]);
  const [banking, setBanking] = useState([]);
  const [bankerr, setBankerr] = useState({});
  const [check, setCheck] = useState(false);
  const [total, setTotal] = useState();
  const [rend, setRend] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    axios.get("http://localhost:9999/banking").then((response) => {
      setBanking(response.data);
    });

    var cartss = JSON.parse(localStorage.getItem("cart"), "[]");
    var a = 0;
    for (let index = 0; index < cartss.length; index++) {
      // console.log(cartss);
      a += cartss[index].price;
    }
    setTotal(a);
    setCarts(JSON.parse(localStorage.getItem("cart"), "[]"));
  }, [rend]);

  const delFromCart = (id) => {
    var find = carts.findIndex((item) => item.id === id);
    carts.splice(find, 1);
    localStorage.setItem("cart", JSON.stringify(carts));
    setRend(!rend);
  };

  const setBanker = (idbank) => {
    axios
      .get(`http://localhost:9999/banking/${idbank}`)
      .then((res) => {
        setBankerr(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(idbank);
    setCheck(true)
    setRend(!rend);
  };
  return (
    <div className={cx("p-5")}>
      <div className={cx("text-center heading")}>
        <h3>Thanh Toán</h3>
        <p>Nơi Thanh Toán Cho Những Khóa Học Bạn Đã Đăng Ký</p>
      </div>
      <div className={cx("main", "container")}>
        <div className={cx("main_heading")}>
          <p className="text-center">Tổng tiền:</p>
          <button
            className={cx("btn", "btn-checkout", "btn-block", "text-white")}
          >
            {total} vnđ | {(total / 22500).toFixed(2)} $
          </button>
        </div>
        <div className="main_content">
          <div className="row align-items-center justify-content-between pt-4 pb-4">
            <div className="col-lg-6">
              <div className="d-flex justify-content-between align-items-center">
                {banking.map((items, index) => {
                  return (
                    <div
                      className={cx("card-payment", "p-2", "col-lg-3")}
                      key={index}
                      onClick={(e) => setBanker(items.id)}
                    >
                      <div className={cx("img-brand", "m-auto")}>
                        <img src={items.logo} alt="" className="card-img" />
                      </div>
                      <div className={cx("brand", "text-center")}>
                        <p className="m-0">{items.name}</p>
                      </div>
                    </div>
                  );
                })}
                {/* <div className={cx("card-payment", "p-2", "col-lg-3")}>
                  <div className={cx("img-brand", "m-auto")}>
                    <img src={tech} alt="" className="card-img" />
                  </div>
                  <div className={cx("brand", "text-center")}>
                    <p className="m-0">Techcombank</p>
                  </div>
                </div>
                <div className={cx("card-payment", "p-2", "col-lg-3")}>
                  <div className={cx("img-brand", "m-auto")}>
                    <img src={momo} alt="" className="card-img" />
                  </div>
                  <div className={cx("brand", "text-center")}>
                    <p className="m-0">Momo</p>
                  </div>
                </div>
                <div className={cx("card-payment", "p-2", "col-lg-3")}>
                  <div className={cx("img-brand", "m-auto")}>
                    <img src={mb} alt="" className="card-img" />
                  </div>
                  <div className={cx("brand", "text-center")}>
                    <p className="m-0">MB Bank</p>
                  </div>
                </div>
                <div className={cx("card-payment", "p-2", "col-lg-3")}>
                  <div className={cx("img-brand", "m-auto")}>
                    <img src={tp} alt="" className="card-img" />
                  </div>
                  <div className={cx("brand", "text-center")}>
                    <p className="m-0">TP Bank</p>
                  </div>
                </div> */}
              </div>
              <div className={cx("main-content", "mt-5")}>
                <h3>Chuyển Khoản Thủ Công</h3>
                <div className={cx("details")}>
                  <p className={cx("banking", "d-inline-block")}>
                    Ngân Hàng:
                    <span id="bankName">
                      {!check ? <span className="text-warning"> Hãy Chọn Ngân Hàng</span> : <span className="text-danger"> {bankerr.name}</span>}
                    </span>
                  </p>
                  <br />
                  <p className={cx("banking", "d-inline-block")}>
                    Số Tài Khoản:
                    <span id="bankNumber">
                      {!check ? <span className="text-warning"> Hãy Chọn Ngân Hàng</span> : <span className="text-danger"> {bankerr.stk}</span>}
                    </span>
                  </p>
                  <Link
                    to={"/cart"}
                    type="button"
                    className={cx(
                      "btn",
                      "btn-checkout",
                      "btn-block",
                      "text-white"
                    )}
                  >
                    Quay Trở Lại Trang Giỏ Hàng
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="text-center">
                <p>Chuyển Khoản Bằng Mã QR</p>
              </div>
              <div className="m-auto">
                <div className={cx("qr")}>
                  <img src={qr} alt="" className="card-img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p>Những Khóa Học Bạn Đã Mua</p>
        </div>
        <div className="table">
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Ảnh</th>
                  <th scope="col">Tên Khóa Học</th>
                  <th scope="col">Tên Tác Giả</th>
                  <th scope="col">Giá Khóa Học (vnd)</th>
                  <th scope="col">Giá Khóa Học (usd)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {carts.map((item, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row" className={cx("img")}>
                        <img src={item.image} alt="" className="card-img" />
                      </th>
                      <th>{item.name}</th>
                      <td>{!item ? <></> : <p>BachKhoa - Aptech</p>}</td>
                      <td>{item.price} vnd</td>
                      <td>{(item.price / 22500).toFixed(2)} $</td>
                      <td>
                        <BsTrash
                          onClick={(e) => {
                            delFromCart(item.id);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
