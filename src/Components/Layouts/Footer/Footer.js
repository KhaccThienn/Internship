import React from 'react';
import classNames from 'classnames/bind';
import style from './Footer.module.css';
import logo from "~/Asset/logo.png";
import { FaYoutubeSquare, FaFacebookSquare, FaTiktok } from 'react-icons/fa';
import { Link } from "react-router-dom"
const cx = classNames.bind(style);

function Footer() {
  return (
    <div className={cx('bg-footer')}>
      <div className='container pt-5'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className={cx("d-flex")}>
              <div className={cx('footer-logo')}>
                <img src={logo} alt='...' className='card-img' />
              </div>
              <div className={cx('footer-font', 'pl-2')}>
                <p className={cx('text-uppercase', 'font-weight-bold', 'footer-fontsize')}>Làm trước học sau</p>
                <p className='font-weight-bold'>Học lập trình để đi làm !</p>
              </div>
            </div>
            <div className={cx('text-light')}>
              <p>Điện thoại: 0112334556</p>
              <p>Email: contact@fullstack.edu.vn</p>
              <p>Địa chỉ: Bachkhoa - Aptech, 234 Hoàng Quốc Việt, Bắc Từ Liêm, Hà Nội.</p>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className={cx('footer-font', 'ml-5')}>
              <h4 className={cx('mb-4')}>F9</h4>
              <p>Giới Thiệu</p>
              <p>Cơ Hội Việc Làm</p>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className={cx('footer-font', 'ml-3')}>
            
              <h4 className={cx('mb-4')}>Hỗ Trợ</h4>
              <Link to="/contact" className={cx("cursor-pointer")}>
                <p>Liên Hệ</p>
              </Link>
              <p>Bảo Mật</p>
              <p>Điều Khoản</p>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className={cx('footer-font')}>
              <h5 className={cx('mb-4')}>Hệ Thống Đào Tạo CNTT Quốc Tế Bachkhoa - Aptech</h5>
              <p>Trang Chủ</p>
              <p>Dịch Vụ</p>
              <p>Về Chúng Tôi</p>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <p className='mt-4 text-light'>© 2022 F9. Nền tảng học lập trình hàng đầu Việt Nam</p>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='container'>
              <div className='row'>
                <div className={cx('text-light', 'pl-5', 'mt-2', 'footer-icon')}>
                  <FaYoutubeSquare />
                </div>
                <div className={cx('text-light', 'pl-5', 'mt-2', 'footer-icon')}>
                  <FaFacebookSquare />
                </div>
                <div className={cx('text-light', 'pl-5', 'mt-2', 'footer-icon')}>
                  <FaTiktok />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer