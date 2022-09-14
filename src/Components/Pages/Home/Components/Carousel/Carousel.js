import classNames from "classnames/bind";
import Carousel from "framer-motion-carousel";
import { Link } from "react-router-dom";
import style from "./carousels.module.css";

const cx = classNames.bind(style)
const image = [
  "https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/10/slider1.jpg",
  "https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/10/slider2.jpg",
  "https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/10/slider3.jpg",
];

const styles = {
  height: 600,
}

const Carousels = () => (
  <div>
    <Carousel renderDots={false} style={styles}>
      {image.map((item, i) => (
        <div className={cx("position-relative")} key={i}>
          <img
            draggable={false}
            src={item}
            alt="..."
            
            className="card-img"
          />
          <div className={cx("overlays", "text-white")}>
            <p>Timeless & Elegant</p>
            <h1>Best Seller</h1>
            <p>
              Complete your everyday look with a classic leather strap watch.
            </p>
            <Link to={"/"} className={cx("btn-pages")}>Shop Now</Link>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);
export default Carousels;
