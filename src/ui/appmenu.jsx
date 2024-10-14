import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
const Projectmenu = (prob) => {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState({ logo: true });
  const handleHover = () => {
    setHover(true);
  };
  const handleLeave = () => {
    setHover(false);
  };

  return (
    <>
      <DropdownDiv
        style={{
          alignItems: "center",
          height: "100%",
          width: hover ? "180px" : "90px",
        }}
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="34px"
            viewBox="0 -960 960 960"
            width="34px"
            fill="black"
          >
            <path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z" />
          </svg>
        </div>
        <DropedDiv
          style={{
            opacity: hover ? "1" : "0",
            pointerEvents: hover ? "auto" : "none",
            width: "900px",
          }}
          onClick={handleLeave}
        >
          <Link style={{ width: "100%" }} to="/learn_service">
            <ItemDiv>
              <li>Learn now !</li>
            </ItemDiv>
          </Link>

          <Link
            style={{ width: "100%", overFlow: "hidden" }}
            to="/web_dev_service"
          >
            <ItemDiv>
              <li
                style={{
                  overFlow: "hidden",
                }}
              >
                Web~Dev Service
              </li>
            </ItemDiv>
          </Link>
          <Link
            style={{ width: "100%" }}
            to="/graphic_design_service
"
          >
            <ItemDiv>
              <li>Graphic Service</li>
            </ItemDiv>
          </Link>

          <Link
            style={{ width: "100%" }}
            to="/list_demo_app
"
          >
            <ItemDiv>
              <li>Demo App</li>
            </ItemDiv>
          </Link>
        </DropedDiv>
      </DropdownDiv>
    </>
  );
};

//css

const DropdownDiv = styled.div`
  transition: width 1s ease;
  cursor: pointer;
  position: relative;
  display: inline-block;
  @media (min-width: 700px) {
    display: none;
  }
`;
const ItemDiv = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  &:hover {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    color: black;
    background-color: #f1f5f9;
    backdrop-filter: blur(11.1px);
    -webkit-backdrop-filter: blur(11.1px);
  }
  &:active {
    background-color: white;
  }
`;
const DropedDiv = styled.div`
  transition: opacity 0.5s ease;
  z-index: 10;
  pointer-events: none;
  overflow: hidden;
  background-color: #292c3c;
  left: 0;
  height: 100vh;
  max-width: 600px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: absolute;
`;
export default Projectmenu;
