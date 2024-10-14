import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const Application = () => {
  return (
    <>
      <Link style={{ width: "100%", overFlow: "hidden" }} to="/demo4">
        <ItemDiv>
          <li
            style={{
              overFlow: "hidden",
            }}
          >
            Weather Application
          </li>
        </ItemDiv>
      </Link>

      <Link style={{ width: "100%" }} to="/demo5">
        <ItemDiv>
          <li>News Application</li>
        </ItemDiv>
      </Link>

      <Link style={{ width: "100%" }} to="/demo2">
        <ItemDiv>
          <li>PhoneBook Application</li>
        </ItemDiv>
      </Link>

      <Link style={{ width: "100%" }} to="/demo1">
        <ItemDiv>
          <li>Quote Application</li>
        </ItemDiv>
      </Link>
    </>
  );
};

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

export default Application;
