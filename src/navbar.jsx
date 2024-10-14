import Appmenu from "./ui/appmenu.jsx";
import Projectmenu from "./ui/projectmenu.jsx";
import HomeMenu from "./ui/homeMenu.jsx";
import Graphicmenu from "./ui/graphicmenu.jsx";
import WebdevMenu from "./ui/webdevmenu.jsx";
import LearnnowMenu from "./ui/learnnowmenu.jsx";
import LogoMenu from "./ui/logomenu.jsx";
import { Icon, GlassDivContainer } from "./ui/style.jsx";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState({ logo: true });
  return (
    <>
      <GlassDivContainer
        style={{
          position: "sticky",
          top: 0,
          marginTop: 0,
          borderRadius: "0px",
          zIndex: 20,
        }}
      >
        <nav
          style={{
            justifyContent: "space-between",
            width: "100%",
            height: "5vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="slideInRight"
            style={{
              width: "30%",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LogoMenu click={click} setClick={setClick} />
          </div>
          <div
            style={{
              // backgroundColor: "red",
              width: "70%",
              height: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <LearnnowMenu click={click} setClick={setClick} />
            <WebdevMenu click={click} setClick={setClick} />
            <Graphicmenu click={click} setClick={setClick} />
            <Projectmenu />
            <Appmenu></Appmenu>
          </div>
        </nav>
      </GlassDivContainer>
    </>
  );
};

export default Navbar;
