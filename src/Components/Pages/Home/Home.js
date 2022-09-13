import React from 'react'
import classNames from 'classnames/bind'
import style from "./home.module.css"
const cx = classNames.bind(style)
function Home() {
  return (
    <div className={cx('text-danger', "text-center")}>
      home
    </div>
  )
}

export default Home