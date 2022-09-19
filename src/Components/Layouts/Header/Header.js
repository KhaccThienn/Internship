import React from 'react';
import classNames from 'classnames/bind';
import style from './header.module.css'
import { FaSearch } from 'react-icons/fa';
import { GrMenu } from 'react-icons/gr';
import { AiOutlineShoppingCart,AiOutlineSearch } from 'react-icons/ai';
import logo from "~/Asset/logo.png";

let cx = classNames.bind(style);  

function Header() {
  return (
    <div>
      {/* laptop */}
      {/* <div className={cx('container-fluid', 'header')}>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='row'>
              <div className={cx('col-lg-2', 'logo-header')}>
                  <img src={logo}/>
              </div>
              <div className={cx('font-logo', 'col-lg-10' )}>
                <a>Làm Trước - Học Sau</a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 position-relative'>
              <input className={cx('input-header', )} placeholder='Tim kiem khoa hoc, bai viet, v.v...'/>
              <AiOutlineSearch  className={cx('icon-search')}/>
          </div>
          <div className={cx('col-lg-2', 'header-log')}>
            <div className='row'>
              <div className={cx('col-lg-3', 'cart-icon')}>
                  <AiOutlineShoppingCart />
              </div>
              <div className='col-lg-9'>
                <button className={cx('bt-header')}>Đăng Nhập</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* mobile */}
      {/* <div className={cx('container-fluid', 'header')}>
        <div className='row'>
          <div className={cx('col-2')}>
            <GrMenu className={cx('menu-mobile')}/>
          </div>
          <div className={cx('col-5')}>
            
          </div>
          <div className={cx('col-1')}>
            <AiOutlineSearch  className={cx('icon-search')}/>
          </div>
          <div className={cx('col-4')}>
            <button className={cx('bt-mobile')}>Đăng Nhập</button>
          </div>
        </div>
      </div> */}

      {/* tablet */}
      <div className={cx('container-fluid', 'header')}>
        <div className='row'>
          <div className='col-md-2'>
            <GrMenu className={cx('menu-mobile')}/>
          </div>
          <div className={cx('col-md-7', 'position-relative', 'input-form')}>
              <input className={cx('input-header', )} placeholder='Tim kiem khoa hoc, bai viet, v.v...'/>
              <AiOutlineSearch  className={cx('icon-search')}/>
          </div>
          <div className={cx('col-md-3', 'icon-log')}>            
            <button className={cx('bt-header')}>Đăng Nhập</button>              
          </div>
        </div>
      </div>

    </div>
    

  )
}

export default Header