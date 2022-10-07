import { useEffect, useState } from "react";
import { Button } from "antd";
import classNames from "classnames/bind";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { GrMenu } from "react-icons/gr";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "~/Asset/logo.png";
import "./header.module.css";
import style from "./header.module.css";
import { useDispatch } from 'react-redux/es/exports';
import BoxSearch from "./BoxSearch/BoxSearch"
import axios from "axios";
import * as productService from "~/services/productService";


let cx = classNames.bind(style);

function Header() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const user = useSelector(state => state.UserReducers.user);

  const [keyWord, setKeyWord] = useState('');
  const [showProducts, setShowProducts] = useState([]);
  const reset = () => {
    setKeyWord('')
  }
  useEffect(() => {
    const filterByKeyName = async (keyWord) => {
      const data = await productService.filterByKeyName(keyWord);
      setShowProducts(data);
      console.log(keyWord);
      console.log(data);
    }
    const timeOut = setTimeout(() => {
      filterByKeyName(keyWord);
    }, 300);
    return () => clearTimeout(timeOut);
  }, [keyWord])

  return (
    <div>
      {/* laptop */}
      <div className={cx("container-fluid", "header", "laptop")}>
        <div className="row">
          <div className={cx("col-lg-4", "col-md-2", "col-2")}>
            <div className="row">
              <div className={cx("col-lg-2", "logo-header")}>

                <Link to="/"><img src={logo} alt="..." /></Link>

              </div>
              <div className={cx("font-logo", "col-lg-10")}>
                <Link to="/">Làm Trước - Học Sau</Link>
              </div>
            </div>
          </div>
          <form

            className={cx(
              "col-lg-6",
              "position-relative",
              "col-md-7",
              "col-5",
              "input-form"
            )}
          >
            <input
              className={cx("input-header")}
              placeholder="Tim kiem khoa hoc, bai viet, v.v..."
              onChange={e => setKeyWord(e.target.value.trim())}
            />
            <AiOutlineSearch className={cx("icon-search")} />


          </form>
          {keyWord !== '' && <BoxSearch keyWord={keyWord} data={showProducts} reset={reset} />}
          <div className={cx("col-lg-2", "header-log", "col-md-3", "col-4")}>
            <div className="row">
              <div className={cx("col-lg-3", "cart-icon")}>
                <Link to="/cart">
                  <AiOutlineShoppingCart />
                </Link>
              </div>
              <div className={cx("col-lg-9", "col-4")}>
                <Button className={cx("bt-header", "position-relative")}>
                  <div className="dropdown">
                    <div className={cx('btn', 'btn-secondary', 'text-white', 'button-login')} type="button" data-toggle="dropdown" aria-expanded="false">
                      {
                        !user.name && (
                          <Link to="/login" className="text-white text-decoration-none">
                            Đăng nhập
                          </Link>
                        )
                      }
                    </div>

                    {
                      user.name && <div className={cx("dropdown-menu", "login", 'text-center')} id="login"><p>{user.name}</p>
                        <button className="dropdown-item" onClick={() => dispatch({ type: "REMOVE_USER" })} type="button">Đăng xuất</button></div>
                    }
                  </div>


                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className={cx("container-fluid", "header", "mobile")}>
        <div className="row">
          <div className={cx("col-2")}>
            <GrMenu className={cx("menu-mobile")} />
          </div>
          <div className={cx("col-5")}></div>
          <div className={cx("col-1")}></div>
          <div className={cx("col-4")}>
            <Button type="danger" className={cx("bt-header")}>
              <Link to="/login" className="text-white text-decoration-none">
                Đăng nhập
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* tablet */}
      <div className={cx("container-fluid", "header", "tablet")}>
        <div className="row">
          <div className="col-md-2">
            <GrMenu className={cx("menu-mobile")} />
          </div>
          <div className={cx("col-md-7", "position-relative", "input-form")}>
            <input
              className={cx("input-header")}
              placeholder="Tim kiem khoa hoc, bai viet, v.v..."
            />
            <AiOutlineSearch className={cx("icon-search")} />
          </div>
          <div className={cx("col-md-3", "icon-log")}>
            <Button type="danger" className={cx("bt-header")}>
              <Link to="/login" className="text-white text-decoration-none">
                Đăng nhập
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className={cx("sidebar-moblie")}>
        <li className={cx("home")}>
          <Link to="/" className={cx("cursor-pointer")}>
            <p>Home</p>
          </Link>
        </li>

        <li className={cx("home")}>
          <Link to="/road" className={cx("cursor-pointer")}>
            <p>Lo Trinh</p>
          </Link>
        </li>

        <li className={cx("home")}>
          <Link to="/learn" className={cx("cursor-pointer")}>
            <p>Hoc</p>
          </Link>
        </li>

        <li className={cx("home")}>
          <Link to="/blog" className={cx("cursor-pointer")}>
            <p>Blog</p>
          </Link>
        </li>
        <li className="px-3">
          <input
            className={cx("form-control", "fom-tablet")}
            placeholder="Tim kiem khoa hoc, bai viet, v.v..."
          ></input>
        </li>
      </div>
    </div>
  );
}

export default Header;
