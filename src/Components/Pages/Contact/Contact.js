import React from 'react';
import classNames from 'classnames/bind';
import style from './contact.module.css';
import { GrMenu } from 'react-icons/gr';
let cx = classNames.bind(style);  

function Contact() {
  return (
    
    <div className={cx('container')}>
      <h2 className='text-center'>Liên Hệ Với Chúng Tôi</h2>
      <h7>Chúng tôi luôn sẵn sàng tiếp nhận mọi ý kiến đóng góp và giải đáp những yêu cầu của bạn.
        <p>Hãy liên hệ ngay với chúng tôi</p>
      </h7>
      <div className={cx('container')}>
        <div className={cx('row')}>
          <div className={cx('col-lg-6', 'text-contact')}>
            <p className=''>Bach Khoa - Aptech, 234 Hoàng Quốc Việt, Bắc Từ Liêm, Hà Nội</p>
            <p className=''>0392.689.213</p>
            <p className=''>muzankibut112@gmail.com</p>
            <div className={cx('text-input')}>
              <p>Họ và tên</p>
              <input className={cx('input-contact')} placeholder='Nhập Tên Đầy Đủ Của Bạn...'/>
            </div>
            <div className={cx('text-input')}>
              <p>Email</p>
              <input className={cx('input-contact')} placeholder='Nhập Email...'/>
            </div>
            <div className={cx('text-input')}>
              <p>Điện Thoại</p>
              <input className={cx('input-contact')} placeholder='Nhập Số Điện Thoại...'/>
            </div>
            <div className={cx('text-input')}>
              <p>Nội Dung</p>
              <input className={cx('input-contact-nd')} placeholder='Nhập Nội Dung Liên Hệ...'/>
            </div>
          </div>
          <div className={cx('col-lg-6')}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact