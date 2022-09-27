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
              <input className={cx('input-contact')} placeholder='Nhập Tên Đầy Đủ Của Bạn...' />
            </div>
            <div className={cx('text-input')}>
              <p>Email</p>
              <input className={cx('input-contact')} placeholder='Nhập Email...' />
            </div>
            <div className={cx('text-input')}>
              <p>Điện Thoại</p>
              <input className={cx('input-contact')} placeholder='Nhập Số Điện Thoại...' />
            </div>
            <div className={cx('text-input')}>
              <p>Nội Dung</p>
              <input className={cx('input-contact-nd')} placeholder='Nhập Nội Dung Liên Hệ...' />
            </div>
          </div>
          <div className={cx('col-lg-6')}>
            <div >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6586636417437!2d105.78131221501306!3d21.0463394859889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3b4220c2bd%3A0x1c9e359e2a4f618c!2sB%C3%A1ch%20Khoa%20Aptech!5e0!3m2!1svi!2s!4v1664245036681!5m2!1svi!2s" 
              className={cx('map-contact')} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact