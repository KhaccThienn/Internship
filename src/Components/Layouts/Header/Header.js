import React from 'react';
import classNames from 'classnames/bind';
import style from './header.module.css'
import { FaSearch } from 'react-icons/fa';

let cx = classNames.bind(style);  

function Header() {
  return (
    <div className={cx('container-fluid', 'header')}>
      <div className='row'>
        <div className='col-lg-4'>
          <div className='row'>
            <div className={cx('col-lg-3', 'logo-header')}>
                <img src=''/>
                <a>haha</a>
            </div>
            <div className={cx('font-logo', 'col-lg-9' )}>
              <a>Làm Trước - Học Sau</a>
            </div>
          </div>
        </div>
        <div className='col-lg-6 position-relative'>
            <input className={cx('input-header', )} placeholder='Tim kiem khoa hoc, bai viet, v.v...'/>
            <FaSearch  className={cx('icon-search')}/>
        </div>
        <div className='col-lg-2'>
          <button className={cx('bt-header')}>Đăng Nhập</button>
        </div>
      </div>
    </div>
  )
}

export default Header