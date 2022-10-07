import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styled from "./cart.module.css";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const cx = classNames.bind(styled);

function Cart() {
  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState();
  const [rend, setRend] = useState(true)
  useEffect(() => {
    window.scrollTo(0, 0);
    var cartss = JSON.parse(localStorage.getItem("cart"), "[]")
    var a = 0;
    for (let index = 0; index < cartss.length; index++) {
      console.log(cartss);
      a += cartss[index].price ;
    }
    setTotal(a);
    setCarts(JSON.parse(localStorage.getItem("cart"), "[]"));
  }, [rend]);

  const delFromCart = (id) => {
    var find = carts.findIndex((item) => item.id === id);
    carts.splice(find, 1);
    localStorage.setItem("cart", JSON.stringify(carts));
    setRend(!rend)
  };


  return (
    <div className="p-5">
      <div className={cx("text-center", "heading")}>
        <h3>Giỏ Hàng</h3>
        <p>Nơi Lưu Trữ Những Khóa Học Bạn Đã Mua</p>
      </div>

      <div className={cx("main-table")}>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Ảnh</th>
                <th scope="col">Tên Khóa Học</th>
                <th scope="col">Tên Tác Giả</th>
                <th scope="col">Giá Khóa Học (vnd)</th>
                <th scope="col">Giá Khóa Học (usd)</th>
                <th scope="col">Action</th>
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
                    <td onClick={(e) => delFromCart(item.id)}>
                      <BsTrash />
                    </td>
                  </tr>
                );
              })}

              <tr>
                <td colSpan="4"></td>
                <td colSpan="2">
                  <Link
                    to={"/checkout"}
                    type="button"
                    className={cx("btn", "btn-checkout")}
                  >
                    Thanh Toán: {total} vnd
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cart;
