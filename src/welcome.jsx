import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Icon, DivContainer, Pfimg } from "./ui/style.jsx";
import Stack from "./stack.jsx";

const Divphone = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Welcome = () => {
  const [hover, sethover] = useState(false);
  return (
    <>
      <DivContainer className="fadeIn1">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <div
            className=""
            style={{
              display: "flex",
              width: "50%",
              height: "100%",
              justifyContent: "flex-end",
              gap: "5px",
              marginRight: "15px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              onMouseOver={() => sethover(true)}
              onMouseLeave={() => sethover(false)}
              style={{
                width: "200px",
                borderRadius: "10px",
                position: "relative",
                overflow: "hidden",
              }}
              className="centerflex "
            >
              <Link
                to="my_background"
                style={{
                  height: "90%",
                }}
                className="centerflex "
              >
                <div
                  style={{
                    opacity: hover ? 1 : 0,
                    pointerEvents: "none",
                    position: "absolute",
                    zIndex: 10,
                  }}
                  className="inherit centerflex"
                >
                  <h1 style={{ color: "black", fontSize: "2.8rem" }}>
                    Detail..
                  </h1>
                </div>
                <Pfimg
                  className="shadow"
                  style={{ height: "100%", border: "1px solid #f1f5f9" }}
                  src="/pfwelcome2.jpg"
                  alt="SOR NISITH"
                />
              </Link>
            </div>
          </div>
          <div
            className=" slideInRight centerflex"
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-evenly",
            }}
          >
            <div style={{}}>
              <h1 className=" fadeIn1">Welcome ! </h1>
              <h2>{"> SOR NISITH - Freelancer"}</h2>
              <h2>{"> Fullstack Web Developer"}</h2>
            </div>
            <div
              style={{
                marginTop: "2px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <a
                className="centerflex"
                target="_blank"
                href="https://github.com/SORNISITH?tab=repositories"
              >
                <Icon draggable="false" src="/github-mark.svg" />
              </a>
              <a
                className="centerflex"
                href="https://t.me/mpd_nz"
                target="_blank"
              >
                <Icon draggable="false" src="/telegram.svg" />
              </a>
              <Divphone
                style={{
                  marginLeft: "5px",
                  width: "60%",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p>+85569 907 747</p>
                <p>+85518 524 6867</p>
              </Divphone>
            </div>
          </div>
        </div>
      </DivContainer>
      <Stack></Stack>
      <DivContainer className="fadeIn3">
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <video
            src="/vd1.mp4"
            width="100%"
            height=""
            autoPlay
            loop
            muted
            playsInline
            alt="Video Loading"
          >
            vd error ! ur not support
          </video>
        </div>
      </DivContainer>
    </>
  );
};

export default Welcome;
