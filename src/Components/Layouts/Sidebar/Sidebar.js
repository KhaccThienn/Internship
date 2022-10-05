import React from 'react'

import classNames from 'classnames/bind'
import styled from "./sidebar.module.css"
import { Link } from "react-router-dom"
import { GrAdd } from "react-icons/gr"
import { AiFillHome } from "react-icons/ai"
import { FaRoad, FaLightbulb } from "react-icons/fa";
import {BsNewspaper} from "react-icons/bs"

const cx = classNames.bind(styled)

function Sidebar() {
  return (
    <div className={cx("bg-sidebar")}>
      <div className={cx("main-content", "list-nav", "container", "p-3")}>
        <ul className={cx("m-auto", "list")}>
          <li className={cx("CreateButton")}>
            <GrAdd />
          </li>

          <li className={cx("home", )}>
            <Link to="/" className={cx("text-center", "cursor-pointer")}>
              <div>
                <AiFillHome />
              </div>
              <p>Home</p>
            </Link>
          </li>

          <li className={cx("home", )}>
            <Link to="/road" className={cx("text-center", "cursor-pointer")}>
              <div>
                <FaRoad />
              </div>
              <p>Lo Trinh</p>
            </Link>
          </li>

          <li className={cx("home", )}>
            <Link to="/frontend" className={cx("text-center", "cursor-pointer")}>
              <div>
                <FaLightbulb />
              </div>
              <p>Hoc</p>
            </Link>
          </li>

          <li className={cx("home", )}>
            <Link to="/blog" className={cx("text-center", "cursor-pointer")}>
              <div>
                <BsNewspaper />
              </div>
              <p>Blog</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar