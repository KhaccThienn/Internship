import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./search.module.css";
import axios from "axios";


let cx = classNames.bind(style);
function Search() {

  const [course, setCourse] = useState([]);
  const [dCourse, setDCourse] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9999/course")
      .then((res) => {
        console.log(course);
        setCourse(res.data);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2 className="ketqua">Kết quả tìm kiếm cho : JavaScript</h2>
      {/* {course.map((items, index) => {
        { console.log(items.name) }
      })} */}
      <div className="container-fruid">
        <div className={cx("row", "p-0")}>
          {course.map((items, index) => {
            return (

              <div className={cx("card", "col-lg-2", "card-timkiem")} >
                <div className={cx("card-img-top", "p-0", "card-imgne")}>{items.url}</div>
                <div className={cx("card-body")}>
                  <h5 className={cx("card-title","text-truncate")}>{items.name}</h5>
                  <p className={cx("card-text", "text-truncate")}>{items.maintain}</p>
                  <a href="#" className={cx("btn", "btn-danger", "bt-card")}>Xem Ngay</a>
                </div>
              </div>

            );

          })}
        </div>
      </div>

    </div>
  );
}

export default Search;