import axios from "axios";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { BsFillCheckCircleFill, BsFillClockFill } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import oe96bk from "~/Asset/96bk.png";
import anhluong from "~/Asset/gv_nguyen_anh_luong.jpg";
import anhluan from "~/Asset/gv_nguyen_van_luan.jpg";
import rika from "~/Asset/rika.png";
import style from "./dfree.module.css";

let cx = classNames.bind(style);

function DetailFree({ setIdCourse }) {
  const [dCourse, setDCourse] = useState({});
  const [listDetail, setListDetail] = useState([]);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const url = "http://localhost:9999/FECourse";
  const urlDetail = `http://localhost:9999/course/?courseId=${id}`;

  useEffect(() => {
    axios
      .get(`${url}/${id}`)
      .then((res) => {
        setDCourse(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(urlDetail)
      .then((res) => {
        setListDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    window.scrollTo(0, 0);
    setIdCourse(id);
  }, [id, setIdCourse, urlDetail]);

  const addToCartt = (item) => {
    // setItems(JSON.parse(localStorage.getItem("cart"), "[]"));

    var itemss = JSON.parse(localStorage.getItem("cart"), "[]");
    var newItem = {
      ...item,
    };
    console.log(newItem);
    itemss.push(newItem);
    localStorage.setItem("cart", JSON.stringify(itemss));
    console.log(itemss);

    navigate("/cart");
  };

  return (
    <div className={cx("text-detail")}>
      <h3 className={cx("font-weight-bold")}>{dCourse.name}</h3>
      <p className={cx("ml-3")}>{dCourse.subtitle}</p>

      <div className={cx("container-fluid")}>
        <div className={cx("row")}>
          <div className={cx("col-lg-5", "text-detail1")}>
            <p className="h4">B???n S??? H???c ???????c G?? ?</p>
            <p>{dCourse.onee}</p>
            <p>{dCourse.twoo}</p>
            <p>{dCourse.threee}</p>
            <p>{dCourse.fourr}</p>
          </div>
          <div className={cx("col-lg-6", "p-0", "learn-detail")}>
            {/* ???nh l???y t??? json */}
            <img src={dCourse.image} alt="" className="img-detail" />

            {dCourse.price === 0 ? (
              <p className={cx("price")}>Mi???n Ph??</p>
            ) : (
                <p className={cx("price")}>{dCourse.price} vnd | { (dCourse.price / 22500).toFixed(2) } $</p>
            )}

            <div>
              {dCourse.price === 0 ? (
                <Link to={`/learn`} className={cx("btn", "btn-learn")}>
                  {" "}
                  H???c Ngay{" "}
                </Link>
              ) : (
                <button
                  className={cx("btn-learn")}
                  onClick={(e) => addToCartt(dCourse)}
                >
                  {" "}
                  Mua Ngay{" "}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <p className="h4">Y??u C???u:</p>
      <div className={cx("yeucau")}>
        <i>
          <BsFillCheckCircleFill />
        </i>
        <h5 className={cx("d-inline-block")}>
          M??y vi t??nh c?? k???t n???i internet ( Windows, Ubuntu ho???c MacOS )
        </h5>
      </div>

      <div className={cx("yeucau")}>
        <i>
          <BsFillCheckCircleFill />
        </i>
        <h5 className={cx("d-inline-block")}>
          ?? th???c t??? h???c cao, c?? tr??ch nhi???m, ki??n tr??
        </h5>
      </div>

      <div className={cx("yeucau")}>
        <i>
          <BsFillCheckCircleFill />
        </i>
        <h5 className={cx("d-inline-block")}>
          Kh??ng ???????c n??ng v???i, l??m b??i t???p sau m???i b??i h???c
        </h5>
      </div>

      <h3 className={cx("khoahoc")}>Chi Ti???t V??? Kh??a H???c</h3>

      <div className={cx("container", "p-0")}>
        <div className={cx("row", "icon-khoahoc")}>
          <div className={cx("col-lg-6", "p-0")}>
            <div>
              <i>
                <BsFillClockFill />
              </i>
              <p className="h4">{Math.floor(Math.random() * 100) + 1} h</p>
              <p className="h6">Th???i Gian Ho??n Th??nh Kh??a H???c</p>
            </div>
            <div>
              <i>
                <MdLibraryBooks />
              </i>
              <p className="h4">{listDetail.length}</p>
              <p className="h6">T???ng S??? B??i H???c</p>
            </div>
          </div>
          <div className={cx("col-lg-6", "p-0")}>
            <div>
              <i>
                <IoPeople />
              </i>
              <p className="h4">{dCourse.members}</p>
              <p className="h6">Ng?????i ??ang Tham Gia Kh??a H???c</p>
            </div>
            <div>
              <i>
                <BsFillCheckCircleFill />
              </i>
              <p className="h4">Ch???ng Ch???</p>
              <p className="h6"> Ho??n Th??nh Kh??a H???c C???a F9</p>
            </div>
          </div>
        </div>
      </div>

      <p className={cx("thanhvien", "h4")}>Th??nh Vi??n T???o Ra Kh??a H???c</p>

      <div className={cx("container", "thanhvien2")}>
        <div className="row">
          <div className={cx("col-lg-5", "anhluan")}>
            <div className="row">
              <div className={cx("col-lg-5", "p-0")}>
                <div className={cx("anhgv")}>
                  <img src={anhluan} alt="" className="card-img" />
                </div>
              </div>
              <div className="col-lg-7">
                <h5>Gi???ng Vi??n</h5>
                <div>
                  <p className="h4">Nguy???n V??n Lu???n</p>
                </div>
                <p>
                  <a>
                    {" "}
                    Gi???ng d???y c??c b??? m??n PHP, SQL, Angular, NodeJS, HTML&CSS,
                    JavaScript, React, ...
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className={cx("col-lg-5", "anhluan")}>
            <div className="row">
              <div className={cx("col-lg-5", "p-0")}>
                <div className={cx("anhgv")}>
                  <img src={anhluong} alt="" className="card-img" />
                </div>
              </div>
              <div className="col-lg-7">
                <h5>Gi???ng Vi??n</h5>
                <div>
                  <p className="h4">Nguy???n Anh L????ng</p>
                </div>
                <p>
                  <a>
                    - C??c m??n gi???ng d???y C, HTML,CSS, Bootstrap, SQL
                    PHP,MySQL,Javascript, laravel, yii2, Codeigniter
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("container-fruid", "p-0")}>
        <div className={cx("khungchat")}>
          <div className={cx("heading")}>
            <p className={cx("nhanxet")}>
              ????? l???i nh???n x??t c???a b???n v??? kh??a h???c nh??
            </p>
          </div>
          <div className="container-fluid ">
            <div
              className={cx(
                "row",
                "align-items-center",
                "justify-content-between "
              )}
            >
              <div className={cx("form-group", "col-lg-4")}>
                <input
                  type="text"
                  className={cx("form-control", "form1")}
                  placeholder="T??n c???a b???n..."
                />
              </div>
              <div className={cx("form-group", "col-lg-6 ")}>
                <input
                  type="text"
                  className={cx("form-control", "form2")}
                  placeholder="Nh???n x??t c???a b???n"
                />
              </div>
              <div
                className={cx(
                  "form-group",
                  "align-items-center",
                  "col-lg-2",
                  "btgui"
                )}
              >
                <button
                  type="button"
                  className={cx("btn", "btn-dark", "border-0 ")}
                >
                  {" "}
                  G???i{" "}
                </button>
              </div>
            </div>

            <div className={cx("container-fruid", "dongke")}></div>

            <div className={cx("container-fruid", "rikacmt")}>
              <div className="row">
                <div className="col-lg-6">
                  <img src={rika} alt="" />
                  <a className={cx("tenngcmt")}>Rika</a>
                </div>
                <div className={cx("col-lg-6", "p-0", "cmt")}>
                  <p className="">
                    Kh??a H???c r???t hay, r???t ch???t l?????ng, t??i ???? c?? c??ng vi???c l????ng
                    th??ng 100$
                  </p>
                </div>
              </div>
            </div>

            <div className={cx("container-fruid", "dongke")}></div>

            <div className={cx("container-fruid", "rikacmt")}>
              <div className="row">
                <div className="col-lg-6">
                  <img src={oe96bk} alt="" />
                  <a className={cx("tenngcmt")}>??ng em 96 c?? kh?? b??ch khoa</a>
                </div>
                <div className={cx("col-lg-6", "p-0", "cmt")}>
                  <p className="">
                    Ng??nh IT Vi???t Nam hi???n nay ??? ?????u c???a s??? ph??t tri???n. C?? th???
                    n??i IT l?? vua c???a c??c ngh???. V???a c?? ti???n, c?? quy???n. V???a ki???m
                    ???????c nhi???u $ l???i ???????c x?? h???i tr???ng v???ng. Th???ng em m??nh h???c
                    b??ch khoa c?? kh??, sinh n??m 96. T??? m??y m?? h???c code r???i ??i l??m
                    remote cho c??ng ty M??? 2 n??m nay. M???i t???i online 3-4 gi??? l??
                    xong vi???c. L????ng th??ng 3k6. Nh??ng thu nh???p ch??nh v???n l?? t???
                    nh???n c??c project b??n ngo??i l??m th??m. Tu???n l??m 2,3 c??i nh???
                    nh??ng 9,10k ti???n t????i th??c th???t kh??ng ph???i ????ng thu???. L??m
                    g???n ???????c 3 n??m m?? nh?? xe n?? ???? mua ????? c???. Ngh?? m?? th??m. G??i
                    g?? th?? c??? nghe n?? b???o l??m CNTT th?? ch???y n?????c. C?? b?? kia d??n
                    du h???c sinh ??c, v??? ???????c c?? ch??? gi???i thi???u l??m ng??n h??ng VCB.
                    Th??? n??o th???ng ???y ??i m??? th??? t??n d???ng g???p ph???i th??? l?? h???t ???????c
                    c??? ch??? l???n em. 3 ?????a n?? s???ng chung m???t c??n h??? cao c???p. Nh??
                    con b?? kia bi???t chuy???n ban ?????u ph???n ?????i sau bi???t th???ng ?????y
                    h???c IT th?? ?????i th??i ?????, c??ch ba b???a h???i th??m, n??m b???a t???ng
                    qu?? l???y long, lu??n gi???c c?????i k???o l??? k??o ngon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailFree;
