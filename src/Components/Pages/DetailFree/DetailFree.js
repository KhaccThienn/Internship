import React from 'react';
import classNames from 'classnames/bind';
import style from './dfree.module.css';
import { BsFillCheckCircleFill, BsFillClockFill } from 'react-icons/bs';
import { IoPeople } from 'react-icons/io5';
import { MdLibraryBooks } from 'react-icons/md';
import css from '~/Asset/css.png'
import anhluan from '~/Asset/gv_nguyen_van_luan.jpg'
import anhluong from '~/Asset/gv_nguyen_anh_luong.jpg'
import rika from '~/Asset/rika.png'
import oe96bk from '~/Asset/96bk.png'


let cx = classNames.bind(style);

function DetailFree() {
  return (
    <div className={cx("text-detail")}>
      <h3 className={cx('font-weight-bold')}>Lập Trình Web Với HTML5 - CSS3</h3>
      <p className={cx('ml-3')}>Học Xây Dựng Web Bằng HTML - CSS</p>

      <div className={cx('container-fluid')}>
        <div className={cx('row')}>
          <div className={cx('col-lg-5', 'text-detail1')}>
            <p className='h4'>Bạn Sẽ Học Được Gì ?</p>
            <p>Biết Cách Xây Dựng Website Bằng HTML5 - CSS3</p>
            <p>Biết đặt tên class CSS theo chuẩn BEM</p>
            <p>Biết cách làm giao diện web responsive</p>
            <p>Biết cách phân tích giao diện website</p>
            <p>Nhận chứng chỉ khóa học do Bachkhoa - Aptech cấp</p>
          </div>
          <div className={cx('col-lg-6', 'p-0', 'learn-detail')}>
            {/* ảnh lấy từ json */}
            <img src={css} alt="" className="img-detail" />
            <p>Miễn Phí</p>
            <button>Học Ngay</button>
          </div>
        </div>
      </div>

      <p className='h4'>Yêu Cầu:</p>
      <div className={cx('yeucau')}>
        <i>
          <BsFillCheckCircleFill />
        </i>
        <h5 className={cx("d-inline-block")}>Máy vi tính có kết nối internet ( Windows, Ubuntu hoặc MacOS )</h5>
      </div>

      <div className={cx('yeucau')}>
        <i>
          <BsFillCheckCircleFill />
        </i>
        <h5 className={cx("d-inline-block")}>Ý thức tự học cao, có trách nhiệm, kiên trì</h5>
      </div>

      <div className={cx('yeucau')}>
        <i>
          <BsFillCheckCircleFill />
        </i>
        <h5 className={cx("d-inline-block")}>Không được nóng vội, làm bài tập sau mỗi bài học</h5>
      </div>

      <h3 className={cx("khoahoc")}>Chi Tiết Về Khóa Học</h3>

      <div className={cx('container', 'p-0')}>
        <div className={cx("row", "icon-khoahoc")}>
          <div className={cx("col-lg-6",'p-0')}>
            <div>
              <i>
                <BsFillClockFill />
              </i>
              <p className='h4'>20h</p>
              <p className='h6'>Thời Gian Hoàn Thành Khóa Học</p>
            </div>
            <div>
              <i>
                <MdLibraryBooks />
              </i>
              <p className='h4'>163</p>
              <p className='h6'>Tổng Số Bài Học</p>
            </div>
          </div>
          <div className={cx("col-lg-6",'p-0')}>
            <div>
              <i>
                <IoPeople />
              </i>
              <p className='h4'>4,220,213</p>
              <p className='h6'>Người Đang Tham Gia Khóa Học</p>
            </div>
            <div>
              <i>
                <BsFillCheckCircleFill />
              </i>
              <p className='h4'>Chứng Chỉ</p>
              <p className='h6'> Hoàn Thành Khóa Học Của F9</p>
            </div>
          </div>
        </div>
      </div>

      <p  className={cx("thanhvien",'h4')}>Thành Viên Tạo Ra Khóa Học</p>

      <div className={cx("container", "thanhvien2")}>
        <div className="row">
          <div className={cx("col-lg-5", "anhluan")}>
            <div className="row">
              <div className={cx("col-lg-5", "p-0")}>
                <div className={cx("anhgv")}>
                  <img src={anhluan} alt="" className="card-img"/>
                </div>
              </div>
              <div className="col-lg-7">
                <h5>Giảng Viên</h5>
                <p>
                <p className='h4'>Nguyễn Văn Luận</p>
                </p>
                <p><a>- Giảng dạy các bộ môn PHP, SQL, Angular, NodeJS, HTML&CSS, JavaScript, React, ...</a></p>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className={cx("col-lg-5", "anhluan")}>
            <div className="row">
              <div className={cx("col-lg-5", "p-0")}>
                <div className={cx("anhgv")}>
                  <img src={anhluong} alt="" className="card-img"/>
                </div>
              </div>
              <div className="col-lg-7">
                <h5>Giảng Viên</h5>
                <p>
                <p className='h4'>Nguyễn Anh Lương</p>
                </p>
                <p><a >- Các môn giảng dạy C, HTML,CSS, Bootstrap, SQL PHP,MySQL,Javascript, laravel, yii2,
                    Codeigniter</a></p>
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
            <div className={cx("row", "align-items-center", "justify-content-between ")}>
              <div className={cx("form-group", "col-lg-4")}>
                <input type="text" className={cx("form-control", "form1")} placeholder="Tên của bạn..."/>
              </div>
              <div className={cx("form-group" , "col-lg-6 ")}>
                <input type="text" className={cx("form-control", "form2")} placeholder="Nhận xét của bạn"/>
              </div>
              <div className={cx("form-group", "align-items-center", "col-lg-2", "btgui")}>
                <button type="button"  className={cx("btn", "btn-dark", "border-0 ")}>   Gửi   </button>
              </div>
            </div>  

            <div className={cx("container-fruid","dongke")}></div>

            <div className={cx("container-fruid", "rikacmt")}>
              <div className="row">
                <div className="col-lg-6">
                  <img src={rika} alt=""/>
                  <a className={cx("tenngcmt")}>Rika</a>
                </div>
                <div className={cx("col-lg-6", "p-0", "cmt")}>
                  <p className="">Khóa Học rất hay, rất chất lượng, tôi đã có công việc lương tháng 100$</p>
                </div>
              </div>
            </div>

            <div className={cx("container-fruid", "dongke")}></div>

            <div className={cx("container-fruid", "rikacmt")}>
              <div className="row">
                <div className="col-lg-6">
                  <img src={oe96bk} alt=""/>
                  <a className={cx("tenngcmt")}>Ông em 96 cơ khí bách khoa</a>
                </div>
                <div className={cx("col-lg-6", "p-0", "cmt")}>
                  <p className="">Ngành IT Việt Nam hiện nay ở đầu của sự phát triển. Có thể nói IT là vua của các nghề. Vừa có tiền, có quyền. Vừa kiếm được nhiều $ lại được xã hội trọng vọng.

                    Thằng em mình học bách khoa cơ khí, sinh năm 96. Tự mày mò học code rồi đi làm remote cho công ty Mỹ 2 năm nay. Mỗi tối online 3-4 giờ là xong việc. Lương tháng 3k6. Nhưng thu nhập chính vẫn là từ nhận các project bên ngoài làm thêm. Tuần làm 2,3 cái nhẹ nhàng 9,10k tiền tươi thóc thật không phải đóng thuế. Làm gần được 3 năm mà nhà xe nó đã mua đủ cả. Nghĩ mà thèm.
                    
                    Gái gú thì cứ nghe nó bảo làm CNTT thì chảy nước. Có bé kia dân du học sinh Úc, về được cô chị giới thiệu làm ngân hàng VCB. Thế nào thằng ấy đi mở thẻ tín dụng gặp phải thế là hốt được cả chị lẫn em. 3 đứa nó sống chung một căn hộ cao cấp. Nhà con bé kia biết chuyện ban đầu phản đối sau biết thằng đấy học IT thì đổi thái độ, cách ba bữa hỏi thăm, năm bữa tặng quà lấy long, luôn giục cưới kẻo lỡ kèo ngon.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default DetailFree