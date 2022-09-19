import React from 'react'
import classNames from 'classnames/bind';
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

import styled from "./master.module.css";

const cx = classNames.bind(styled)

function MasterLayouts({children}) {
  return (
    <>
      <div className={cx("sticky-top")}>
        <Header />
      </div>
      <div className={cx('container-fluid')}>
        <div className='row'>
          <div className={cx('col-lg-1', "side", "p-0")}>
            <Sidebar />
          </div>
          <div className={cx('col-lg-11', "p-0")}>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MasterLayouts