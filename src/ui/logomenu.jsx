import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logosvg } from "../icon/logo";
const NavDivItem = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  cursor: pointer;
  border-radius: 3px;
  position: relative;
  transition:
    opacity 2s ease,
    background-color 1s ease,
    box-shadow 0.5s ease;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: lightgreen;
    bottom: 0;
    left: 0;
    transform: scaleX(0); /* Initially hidden by scaling down */
    transform-origin: right; /* Animation starts from the left side */
    transition: transform 0.5s ease; /* Smooth transition for the scale effect */
    box-shadow:
      rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
      rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  }
  &:hover::before {
    transform: scaleX(1); /* Scale to full width on hover */
  }
  &:active {
    background-color: #64748b;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: ${(prob) => (prob.$std ? "3px" : "0px")};
    background-color: green;
    bottom: 0;
    left: 0;
  }
`;

export default function LogoMenu(prob) {
  const [hover, setHover] = useState(0);
  const handleHover = () => {
    setHover(1);
  };
  const handleLeave = () => {
    setHover(0);
  };

  return (
    <>
      <NavDivItem
        $std={prob.click.logo}
        onClick={() => prob.setClick({ logo: true })}
        style={{
          width: "80px",
        }}
      >
        <Link
          style={{}}
          className="centerflex"
          onMouseOver={handleHover}
          to="/"
        >
          <Img
            style={{
              marginLeft: "5px",
              width: "100%",
            }}
            src="blackLG.svg"
            alt=""
          />
        </Link>
      </NavDivItem>
    </>
  );
}
const Img = styled.img`
  margin-left: 5px;
  width: 80px;
`;
