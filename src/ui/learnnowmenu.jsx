import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
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
  @media (max-width: 699px) {
    display: none;
  }
`;

const LearnnowMenu = (prob) => {
  return (
    <>
      <NavDivItem
        $std={prob.click.learnnow}
        onClick={() => prob.setClick({ learnnow: true })}
      >
        <Link
          style={{
            width: "100%",
            height: "100%",
          }}
          to="/learn_service"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="38px"
              fill="black"
            >
              <path d="M160-120v-401l-84 64-36-48 120-91v-114h60v68l260-198 440 336-36 47-84-64v401H160Zm60-60h230v-160h60v160h230v-387L480-765 220-567v387Zm-60-580q0-46 32.5-78t77.5-32q21.25 0 35.63-15Q320-900 320-920h60q0 45-32.08 77.5Q315.83-810 270-810q-20 0-35 14.37-15 14.38-15 35.63h-60Zm60 580h520-520Z" />
            </Svg>
            <TextNav
              onMouseOver={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Learn
            </TextNav>
          </div>
        </Link>
      </NavDivItem>
    </>
  );
};
const Svg = styled.svg`
  display: none;
  @media (min-width: 701px) {
    display: none;
  }
`;
const TextNav = styled.h4`
  pointer-events: none;
  color: black;
  &::after {
    content: " !";
    color: green;
  }
  @media (max-width: 700px) {
  }
`;
//css
export default LearnnowMenu;
