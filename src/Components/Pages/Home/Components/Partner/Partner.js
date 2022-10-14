import React from "react";
import classNames from "classnames/bind";
import styled from "./Partner.module.css";
import client1 from "~/Asset/client1.png"
import client2 from "~/Asset/client2.png"
import client3 from "~/Asset/client3.png"
import client4 from "~/Asset/client4.png"
import client5 from "~/Asset/client5.png"
import client6 from "~/Asset/client6.png"
import client7 from "~/Asset/client7.png"

const cx = classNames.bind(styled);


function Partner() {
    return (
        <div className="container pt-5">
            <div className="home-partner">
                <div className="partner-heading text-center">
                    <p className="h4 font-weight-bold">ĐỐI TÁC CỦA CHÚNG TÔI</p>
                </div>
                <div claclassNames={cx("partner-content", "container")}>
                    <div className={cx("d-flex justify-content-between align-items-center pt-4")}>
                        <div className={cx("part")}>
                            <img src={client1} alt="" className="card-img" />
                        </div>
                        <div className={cx("part")}>
                            <img src={client2} alt="" className="card-img" />
                        </div>
                        <div className={cx("part")}>
                            <img src={client3} alt="" className="card-img" />
                        </div>
                        <div className={cx("part")}>
                            <img src={client4} alt="" className="card-img" />
                        </div>
                        <div className={cx("part")}>
                            <img src={client5} alt="" className="card-img" />
                        </div>
                        <div className={cx("part")}>
                            <img src={client6} alt="" className="card-img" />
                        </div>
                        <div className={cx("part")}>
                            <img src={client7} alt="" className="card-img" />
                        </div>
            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partner;




