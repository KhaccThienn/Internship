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
            <p className="h4">Bạn Sẽ Học Được Gì ?</p>
            <p>{dCourse.onee}</p>
            <p>{dCourse.twoo}</p>
            <p>{dCourse.threee}</p>
            <p>{dCourse.fourr}</p>
          </div>
          <div className={cx("col-lg-6", "p-0", "learn-detail")}>
            {/* ảnh lấy từ json */}
            <img src={dCourse.image} alt="" className="img-detail" />

            {dCourse.price === 0 ? (
              <p className={cx("price")}>Miễn Phí</p>
            ) : (
                <p className={cx("price")}>{dCourse.price} vnd | { (dCourse.price / 22500).toFixed(2) } $</p>
            )}

            <div>
              {dCourse.price === 0 ? (
                <Link to={`/learn`} className={cx("btn", "btn-learn")}>
                  {" "}
                  Học Ngay{" "}
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

      <p className="h4">Yêu Cầu:</p>
      <div className={cx("yeucau")}>
        <i>
          <BsFillCheckCircleFill />
        </i>
        <h5 className={cx("d-inline-block")}>
          Máy vi tính có kết nối internet ( Windows, Ubuntu hoặc MacOS )
        </h5>
      </div>

      <div className={cx("yeucau")}>
        <i>
          <BsFillCheckCircleFill />
        </i>
        <h5 className={cx("d-inline-block")}>
          Ý thức tự học cao, có trách nhiệm, kiên trì
        </h5>
      </div>

      <div className={cx("yeucau")}>
        <i>
          <BsFillCheckCircleFill />
        </i>
        <h5 className={cx("d-inline-block")}>
          Không được nóng vội, làm bài tập sau mỗi bài học
        </h5>
      </div>

      <h3 className={cx("khoahoc")}>Chi Tiết Về Khóa Học</h3>

      <div className={cx("container", "p-0")}>
        <div className={cx("row", "icon-khoahoc")}>
          <div className={cx("col-lg-6", "p-0")}>
            <div>
              <i>
                <BsFillClockFill />
              </i>
              <p className="h4">{Math.floor(Math.random() * 100) + 1} h</p>
              <p className="h6">Thời Gian Hoàn Thành Khóa Học</p>
            </div>
            <div>
              <i>
                <MdLibraryBooks />
              </i>
              <p className="h4">{listDetail.length}</p>
              <p className="h6">Tổng Số Bài Học</p>
            </div>
          </div>
          <div className={cx("col-lg-6", "p-0")}>
            <div>
              <i>
                <IoPeople />
              </i>
              <p className="h4">{dCourse.members}</p>
              <p className="h6">Người Đang Tham Gia Khóa Học</p>
            </div>
            <div>
              <i>
                <BsFillCheckCircleFill />
              </i>
              <p className="h4">Chứng Chỉ</p>
              <p className="h6"> Hoàn Thành Khóa Học Của F9</p>
            </div>
          </div>
        </div>
      </div>

      <p className={cx("thanhvien", "h4")}>Thành Viên Tạo Ra Khóa Học</p>

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
                <h5>Giảng Viên</h5>
                <div>
                  <p className="h4">Nguyễn Văn Luận</p>
                </div>
                <p>
                  <a>
                    {" "}
                    Giảng dạy các bộ môn PHP, SQL, Angular, NodeJS, HTML&CSS,
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
                <h5>Giảng Viên</h5>
                <div>
                  <p className="h4">Nguyễn Anh Lương</p>
                </div>
                <p>
                  <a>
                    - Các môn giảng dạy C, HTML,CSS, Bootstrap, SQL
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
              Để lại nhận xét của bạn về khóa học nhé
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
                  placeholder="Tên của bạn..."
                />
              </div>
              <div className={cx("form-group", "col-lg-6 ")}>
                <input
                  type="text"
                  className={cx("form-control", "form2")}
                  placeholder="Nhận xét của bạn"
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
                  Gửi{" "}
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
                    Khóa Học rất hay, rất chất lượng, tôi đã có công việc lương
                    tháng 100$
                  </p>
                </div>
              </div>
            </div>

            <div className={cx("container-fruid", "dongke")}></div>

            <div className={cx("container-fruid", "rikacmt")}>
              <div className="row">
                <div className="col-lg-6">
                  <img src={oe96bk} alt="" />
                  <a className={cx("tenngcmt")}>Ông em 96 cơ khí bách khoa</a>
                </div>
                <div className={cx("col-lg-6", "p-0", "cmt")}>
                  <p className="">
                    Ngành IT Việt Nam hiện nay ở đầu của sự phát triển. Có thể
                    nói IT là vua của các nghề. Vừa có tiền, có quyền. Vừa kiếm
                    được nhiều $ lại được xã hội trọng vọng. Thằng em mình học
                    bách khoa cơ khí, sinh năm 96. Tự mày mò học code rồi đi làm
                    remote cho công ty Mỹ 2 năm nay. Mỗi tối online 3-4 giờ là
                    xong việc. Lương tháng 3k6. Nhưng thu nhập chính vẫn là từ
                    nhận các project bên ngoài làm thêm. Tuần làm 2,3 cái nhẹ
                    nhàng 9,10k tiền tươi thóc thật không phải đóng thuế. Làm
                    gần được 3 năm mà nhà xe nó đã mua đủ cả. Nghĩ mà thèm. Gái
                    gú thì cứ nghe nó bảo làm CNTT thì chảy nước. Có bé kia dân
                    du học sinh Úc, về được cô chị giới thiệu làm ngân hàng VCB.
                    Thế nào thằng ấy đi mở thẻ tín dụng gặp phải thế là hốt được
                    cả chị lẫn em. 3 đứa nó sống chung một căn hộ cao cấp. Nhà
                    con bé kia biết chuyện ban đầu phản đối sau biết thằng đấy
                    học IT thì đổi thái độ, cách ba bữa hỏi thăm, năm bữa tặng
                    quà lấy long, luôn giục cưới kẻo lỡ kèo ngon.
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
