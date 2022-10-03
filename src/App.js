import { Route, Routes } from "react-router-dom";
import MasterLayouts from "~/Components/Layouts/MasterLayouts";
import Home from "~/Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Blog from "./Components/Pages/Blog/Blog";
import Contact from "./Components/Pages/Contact/Contact";
import FrontEnd from "./Components/Pages/FrontEnd/FrontEnd";
import Learn from "./Components/Pages/Learn/Learn";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import Road from "./Components/Pages/Road/Road";
import Test from "./Components/Pages/Test/Test";
import Upcomming from "./Components/Pages/Upcomming/Upcomming";
import DetailFree from "./Components/Pages/DetailFree/DetailFree";
import Cart from "./Components/Pages/Cart/Cart";
import DetailNFree from "./Components/Pages/DetailNFree/DetailNFree";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={< MasterLayouts children={<Home />} />} />
        <Route path="/road" element={< MasterLayouts children={<Road />} />} />
        <Route path="/blog" element={< MasterLayouts children={<Blog />} />} />
        <Route path="/learn" element={< MasterLayouts children={<Learn />} />} />
        <Route path="/about" element={< MasterLayouts children={<About />} />} />
        <Route path="/contact" element={< MasterLayouts children={<Contact />} />} />
        <Route path="/test" element={< MasterLayouts children={<Test />} />} />
        <Route path="/upcomming" element={< MasterLayouts children={<Upcomming />} />} />
        <Route path="/frontend" element={< MasterLayouts children={<FrontEnd />} />} />
        <Route path="/login" element={< MasterLayouts children={<Login />} />} />
        <Route path="/register" element={< MasterLayouts children={<Register />} />} />
        <Route path="/dFree" element={< MasterLayouts children={<DetailFree />} />} />
        <Route path="/dNFree" element={< MasterLayouts children={<DetailNFree />} />} />
        <Route path="/cart" element={< MasterLayouts children={<Cart />} />} />
      </Routes>
    </>
  );
}

export default App;
