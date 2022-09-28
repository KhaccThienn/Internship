import React from 'react';
import classNames from 'classnames/bind';
import style from './FrontEnd.module.css';
import react from '~/Asset/react.png'

const cx = classNames.bind(style);

function FrontEnd() {
    return (
        <div className='container'>
            <h3 className="text-center font-weight-bold mb-3 mt-2">Lộ Trình Trở Thành Một Lập Trình Viên Front - End ( FE )</h3>
            <div className="row">
                <div className="col-lg-8">
                    <p>Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là Front-end và Back-end. Front-end là phần giao
                        diện người dùng nhìn thấy và có thể tương tác, đó chính là các ứng dụng mobile hay những website bạn đã
                        từng sử dụng. Vì vậy, nhiệm vụ của lập trình viên Front-end là xây dựng các giao diện đẹp, dễ sử dụng và
                        tối ưu trải nghiệm người dùng.</p>
                    <p>Dưới đây là một vài khóa học lập trình FE, dành cho bất cứ ai có đam mê về lập trình FE.</p>
                </div>
                <div className="col-lg-4">
                    <img src={react} alt="" className="card-img"/>
                </div>
            </div>
            <div className={cx('content-fe','mt-5')}>
                <h4 className='font-weight-bold'>1: Nhập Môn IT</h4>
            </div>
        </div>
    )
}

export default FrontEnd