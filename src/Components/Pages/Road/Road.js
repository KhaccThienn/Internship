import React from 'react';
import classNames from 'classnames/bind';
import style from './Road.module.css';

const cx = classNames.bind(style);

function Road() {
  return (
    <div className='container'>
      <div className={cx('rode-top')}>
        <h3 className='font-weight-bold'>Lộ trình học</h3>
        <p>Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học.</p>
        <p> Ví dụ: Để đi làm với vị trí “Lập trình viên Front-end” bạn nên tập trung vào lộ trình “Front-end”.</p>
      </div>
      <div className='container'>
        <div className='row'>
          <div className={cx('col-lg-6', 'col-md-6','col-sm-12','road-infor')}>
            <h5>Lộ trình học Front - End</h5>
            <p>Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé. </p>
          </div>
          <div className={cx('col-lg-6', 'col-md-6','col-sm-12','road-infor')}>
            <h5>Lộ trình học Back - End</h5>
            <p>Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Road