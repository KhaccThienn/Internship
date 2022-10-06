import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styled from "./cart.module.css";
import { BsTrash } from "react-icons/bs";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styled);

function Cart() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    setCarts(JSON.parse(localStorage.getItem("cart"), "[]"));
  }, []);

  const delFromCart = (id) => {
    var find = carts.findIndex((item) => item.course.id === id);
    carts.splice(find, 1);
    localStorage.setItem("cart", JSON.stringify(carts));
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
                <th scope="col">Giá Khóa Học</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {console.log(carts)}
              {carts.map((item, i) => {
                return (
                  <tr key={i}>
                    <th scope="row" className={cx("img")}>
                      <img
                        src={item.course.image}
                        alt=""
                        className="card-img"
                      />
                    </th>
                    <th>{item.course.name}</th>
                    <td>{!item ? <></> : <p>BachKhoa - Aptech</p>}</td>
                    <td>{item.course.price * item.qty} vnd</td>
                    <td>
                      <BsTrash onClick={(e) => delFromCart(item.course.id)} />
                    </td>
                  </tr>
                );
              })}

              <tr>
                <td colSpan="4"></td>
                <td colSpan="1">
                  <Link to={"/checkout"} type="button" className={cx("btn", "btn-checkout")}>
                    Thanh Toán: 
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
