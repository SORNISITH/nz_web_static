import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Demo_1 from "./Demo_1.jsx";
import Demo_4 from "./Demo_4.jsx";
import Demo_2 from "./Demo_2.jsx";
import Demo_5 from "./Demo_5.jsx";
import Welcome from "./welcome.jsx";
import My_Background from "./my_background.jsx";
import LearnnowService from "./learn_service.jsx";
import GraphicService from "./graphic_service.jsx";
import Navbar from "./navbar.jsx";
import "./index.css";
import "./animation.css";
import Footer from "./footer.jsx";
import WebdevService from "./webdev_service.jsx";
//@logo nz
//set TODO
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/demo1" element={<Demo_1 />} />
          <Route path="/demo2" element={<Demo_2 />} />
          <Route path="/demo4" element={<Demo_4 />} />
          <Route path="/demo5" element={<Demo_5 />} />
          <Route path="/my_background" element={<My_Background />} />
          <Route path="/learn_service" element={<LearnnowService />} />
          <Route path="/web_dev_service" element={<WebdevService />} />
          <Route path="/graphic_design_service" element={<GraphicService />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
