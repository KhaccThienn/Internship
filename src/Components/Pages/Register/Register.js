/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import style from './Register.module.css';
import classNames from 'classnames/bind';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { register } from '~/services/user.service';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(style);

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm: ""
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập Họ tên"),
    email: Yup.string().required("Vui lòng nhập email").email("Email không đúng định dạng"),
    password: Yup.string().required("Vui lòng nhập mật khẩu").min(6, "Mật khẩu tối thiếu 6 ký tự"),
    confirm: Yup.string().required("Vui lòng nhập lại mật khẩu").min(6, "Mật khẩu tối thiếu 6 ký tự")
})

function Register() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (user) => {
            let response = await register(user);
            response.status === 201 && navigate("/login");
        }
    });

    return (
        <div className={cx('bg-register', 'd-block')}>
            <div className=''>
                <form onSubmit={formik.handleSubmit} className={cx('form-submit','from')}>
                <h3 className='text-center text-uppercase font-weight-bold'>Đăng ký</h3>
                    <div className={cx("mt-3")}>
                        <label className="mb-0 mr-2 font-weight-bold">
                            Họ và tên
                        </label>
                        <input
                            name="name" type="text" placeholder='Họ và tên'
                            className={cx("form-control", "form-input", "mt-2")}
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </div>
                    <span className={cx("err")}>
                        {formik.errors.name ? formik.errors.name : ""}
                    </span>

                    <div className={cx('mt-3')}>
                        <label className="mb-0 mr-2 font-weight-bold d-block">
                            Email
                        </label>
                        <input
                            name="email" type="email "
                            className={cx("form-control", "form-input", "mt-2")}
                            onChange={formik.handleChange} placeholder="Email"
                            value={formik.values.email}
                        />
                    </div>
                    <span className={cx("err")}>
                        {formik.errors.email ? formik.errors.email : ""}
                    </span>

                    <div className={cx("mb-2", "mt-4")}>
                        <label className="mb-0 mr-2 font-weight-bold d-block">
                            Mật khẩu
                        </label>
                        <input
                            name="password" type="password"
                            className={cx("form-control", "form-input", "mt-2")}
                            onChange={formik.handleChange} placeholder="Mật khẩu"
                            value={formik.values.password}
                        />
                    </div>
                    <p className={cx("err")}>
                        {formik.errors.password ? formik.errors.password : ""}
                    </p>

                    <div className={cx("mb-2", "mt-4")}>
                        <label className="mb-0 mr-2 font-weight-bold d-block">
                            Nhập lại mật khẩu
                        </label>
                        <input
                            name="confirm" type="password"
                            className={cx("form-control", "form-input", "mt-2")}
                            onChange={formik.handleChange} placeholder="Nhập lại mật khẩu"
                            value={formik.values.confirm}
                        />
                    </div>
                    <p className={cx("err")}>
                        {formik.errors.confirm ? formik.errors.confirm : ""}
                    </p>
                    <button
                        type="submit"
                        className={cx("btn", "text-uppercase", "btn-button", "mb-3", "mt-4",'btn-block')}
                    >
                        Đăng ký
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register;
