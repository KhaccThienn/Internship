import React from 'react'
import classNames from 'classnames/bind';
import style from './Register.module.css';

const cx = classNames.bind(style);

function Register() {
    return (
        <div className={cx('bg-login')}>
            <div className="row justify-content-between">
                <div className="col"></div>
                <div className={cx('bg-form','p-5')}>
                    <h4 className="text-center font-weight-bold">Đăng Ký</h4>
                    <form onsubmit="submitForm()" action="#">
                        <div className="form-group">
                            <input type="text" className={cx('form-control','login-form')} oninput="nameValidate()" id="name" placeholder="Tên Đăng Nhập" />
                            <span className="d-none" id="nameErr">Tên Đăng Nhập Không Dưới 4 Ký Tự</span>
                        </div>
                        <div className="form-group">
                            <input type="text" className={cx('form-control','login-form')} oninput="phoneValidate()" id="phone" placeholder="Số Điện Thoại..." />
                            <span className="d-none" id="phoneErr">Số Điện Thoại Không Đúng Định Dạng</span>
                        </div>
                        <div className="form-group">
                            <input type="password" className={cx('form-control','login-form')} oninput="passValidate()" id="pass" placeholder="Mật Khẩu..." />
                            <span className="d-none" id="pasErr">Mật Khẩu Không Dưới 8 Ký Tự</span>
                        </div>
                        <div className="form-group">
                            <input type="password" className={cx('form-control','login-form')} oninput="repassValidate()" id="repass" placeholder="Nhập Lại Mật Khẩu..." />
                            <span className="d-none" id="repassErr">Mật Khẩu Không Dưới 8 Ký Tự</span>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 p-2">Submit</button>
                        <p>Nếu Bạn Có Tài Khoản Đăng Nhập / <a href="login.html" className="text-decoration-none">Đăng Nhập Ngay</a></p>
                    </form>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Register