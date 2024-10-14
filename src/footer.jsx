import { useEffect, useState } from "react";
import { Icon } from "./ui/style.jsx";
import { DivContainer } from "./ui/style.jsx";
const Footer = () => {
  const [getYear, setGetYear] = useState(null);
  const [hover, setHover] = useState(false);
  const getToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth());
    const day = String(today.getDate());
    const formatted = `${year}-${month}-${day}`;
    setGetYear(year);
  };
  useEffect(() => {
    getToday();
  }, []);

  return (
    <>
      <DivContainer
        className="fadeIn3"
        style={{
          display: "flex",
          justifyContent: "center",
          borderRadius: "0px",
          bottom: "0",
        }}
      >
        <p>
          <i>
            <strong>support me a cub of coffee</strong>
          </i>
        </p>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "60%",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <Icon
                className="vibrate-1"
                style={{
                  width: "90px",
                  height: "40px",
                }}
                src="/Bitcoin-Logo-PNG16.png"
              />
              <input
                style={{
                  height: "20px",
                  width: "100px",
                  minWidth: "50%",
                  background: "transparent",
                  border: "1px solid orange",
                  fontSize: "1.3rem",
                  color: "orange",
                  wordWrap: "break-word",
                }}
                readOnly
                value="bc1q8mdj25xzwwxmth5kuush73487ya8snaxgexqwk"
              ></input>
            </div>
          </div>
          <div
            onClick={() => setHover(!hover)}
            onMouseLeave={() => setHover(false)}
            onMouseOver={() => setHover(true)}
            style={{
              height: "100%",
              width: "30%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Icon style={{ marginRight: "10px" }} src="/aba_icon.png" alt="" />
            <img style={{ width: "70px" }} src="/aba.jpg" alt="" />
            <img
              style={{
                transition: "width 0.2s ease",
                border: "1px solid darkgreen",
                bottom: "0",
                position: "absolute",
                width: !hover ? "80px" : "140px",
              }}
              src="/aba.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <p>Copyright 2023 - {getYear} by SOR-NISITH. All rights reserved</p>
        </div>
      </DivContainer>
    </>
  );
};

export default Footer;
