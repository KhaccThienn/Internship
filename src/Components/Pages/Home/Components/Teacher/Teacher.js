import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styled from "./teacher.module.css";
import anhluan from "~/Asset/gv_nguyen_van_luan.jpg"
import thayhien from "~/Asset/gv_pham_xuan_hien.jpg"
import thayluong from "~/Asset/gv_nguyen_anh_luong.jpg"

const cx = classNames.bind(styled);

function Teacher() {
    return (
        <div className="container pt-5">
            <div class="home-teacher">
                <div class="about-boss mt-4">
                    <h3 class="text-center font-weight-bold mb-3">ĐỘI NGŨ GIẢNG VIÊN CỦA CHÚNG TÔI</h3>
                    <div class="container pt-4">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <img src={thayhien} alt="..." class="card-img"/>
                                    <p class="text-center about-text mt-3">Giảng viên Phạm Xuân Hiền</p>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <img src={anhluan} alt="" class="card-img"/>
                                    <p class="text-center about-text mt-3">Giảng viên Nguyễn Văn Luận</p>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <img src={thayluong} alt="" class="card-img"/>
                                    <p class="text-center about-text mt-3">Giảng viên Nguyễn Anh Lương</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Teacher;