import React from 'react'
import classNames from 'classnames/bind'
import style from "./home.module.css"
import Carousels from './Components/Carousel/Carousel'
const cx = classNames.bind(style)
function Home() {
  return (
    <div className={cx('text-danger', "container-fluid")}>
      home
      <Carousels />
    </div>
  )
}

export default Home