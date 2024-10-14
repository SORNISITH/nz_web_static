import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import Application from "./applicationList.jsx";
const Appmenu = (prob) => {
  const [hover, setHover] = useState(false);
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
          <TextNav
            onMouseOver={() => setHover(1)}
            style={{
              fontSize: hover ? "1.5rem" : "1.5rem",
            }}
          >
            Work
          </TextNav>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="black"
          >
            <path d="M480-360 280-560h400L480-360Z" />
          </svg>{" "}
        </div>
        <DropedDiv
          style={{
            opacity: hover ? "1" : "0",
            pointerEvents: hover ? "auto" : "none",
            width: "900px",
          }}
          onClick={handleLeave}
        >
          <Application />
        </DropedDiv>
      </DropdownDiv>
    </>
  );
};

//css
const TextNav = styled.h4`
  @media (max-width: 700px) {
  }
`;

const DropdownDiv = styled.div`
  transition: width 1s ease;
  cursor: pointer;
  position: relative;
  display: inline-block;
  @media (max-width: 700px) {
    display: none;
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
export default Appmenu;
