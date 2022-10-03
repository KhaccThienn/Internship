import React from 'react';
import classNames from 'classnames/bind';
import style from './Login.module.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';


const cx = classNames.bind(style);

// const initValues = {
//   name: "",
//   password: "",
// }

// const validate =  Yup.object().shape({

// })

function Login() {
  return (
    <div className={cx('bg-login')}>
       <div className="row justify-content-between">
        <div className="col"></div>
        <div className={cx('bg-form','p-5','mt-5')}>
          <h4 className="text-center font-weight-bold">Đăng Nhập</h4>
          <form>
            <div className="form-group">
              <input type="text" className={cx('form-control','login-form')} id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Tên Đăng Nhập..."/>
            </div>
            <div className="form-group">
              <input type="password" className={cx('form-control','login-form')} id="exampleInputPassword1"
                placeholder="Mật Khẩu..."/>
            </div>

            <button type="submit" className="btn btn-primary w-100 p-2">Submit</button>
            <p className='mt-3'>Nếu Bạn Chưa Có Tài Khoản Đăng Nhập / <a href="register.html" className="text-decoration-none">Đăng Ký
                Ngay!</a></p>
          </form>
        </div>
        <div className="col"></div>
    </div>
    </div>
  )
}

export default Login