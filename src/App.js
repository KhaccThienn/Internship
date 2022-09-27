import { Route, Routes } from "react-router-dom";
import MasterLayouts from "~/Components/Layouts/MasterLayouts";
import Home from "~/Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Blog from "./Components/Pages/Blog/Blog";
import Contact from "./Components/Pages/Contact/Contact";
import Learn from "./Components/Pages/Learn/Learn";
import Road from "./Components/Pages/Road/Road";
import Test from "./Components/Pages/Test/Test";
import Upcomming from "./Components/Pages/Upcomming/Upcomming";
import DetailFree from "./Components/Pages/DetailFree/DetailFree";

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
        <Route path="/dFree" element={< MasterLayouts children={<DetailFree />} />} />
      </Routes>
    </>
  );
}

export default App;
