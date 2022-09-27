import React from 'react';
import classNames from 'classnames/bind';
import style from './Upcomming.module.css';
import Bannerupcom from '~/Asset/Bannerupcom.png';

const cx = classNames.bind(style);

function Upcomming() {
  return (
    <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-7">
        <h2 className={cx('upcom-text','font-weight-bold')}>Đang Trong Quá Trình Triển Khai Trang Web...</h2>
        <p className={cx('upcom-text','pt-2','upcomming-text')}>Chúng tôi đang cố gắng nỗ lực hoàn thiện trang web này...</p>
        <p className={cx('upcom-text','upcomming-text')}>Chúng tôi sẽ quay trở lại vào một ngày sớm nhất...</p>
      </div>
      <div className="col-lg-5">
        <img src={Bannerupcom} alt="" className="card-img"/>
      </div>
    </div>
  </div>
  )
}

export default Upcomming