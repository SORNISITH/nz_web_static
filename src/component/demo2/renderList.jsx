import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const List = (prob) => {
  const [hover, setHover] = useState("green");
  const [isDivHover, setisDivHover] = useState(false);
  const handleDelete = () => {
    prob.setlist(prob.list.filter((item, index) => index !== prob.index));
  };
  return (
    <>
      <div
        onMouseOver={() => setisDivHover(true)}
        onPointerLeave={() => setisDivHover(false)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          padding: "5px",
          position: "relative",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="5%"
          fill="white"
        >
          <path
            d={
              isDivHover
                ? "m419-321 289-289-43-43-246 246-119-119-43 43 162 162ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"
                : ""
            }
          />
        </svg>
        <div
          style={{
            borderRadius: "5px",
            position: "absolute",
            backgroundColor: hover,
            opacity: "0.55",
            zIndex: "-1",
            height: "100%",
            left: "0",
            width: isDivHover ? "100%" : "0%",
            transition: "width 0.4s",
          }}
        ></div>
        <p style={{ marginLeft: "1%" }}>{prob.item.name} </p>
        <p style={{ marginLeft: "auto", marginRight: "10%" }}>
          {prob.item.number}
        </p>
        <div style={{ position: "relative" }}>
          <img
            onClick={handleDelete}
            onMouseOver={() => setHover("red")}
            onMouseLeave={() => setHover("green")}
            style={{
              marginTop: "5px",
              marginRight: "10px",
              cursor: "pointer",
              borderRadius: "5px",
              backgroundColor: hover,
            }}
            src="/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
            alt="delete icon"
          />
        </div>
      </div>
      <hr />
    </>
  );
};
const RenderList = (prob) => {
  return (
    <>
      {prob.list.map((item, index) => (
        <List
          tooltips={index}
          list={prob.list}
          setlist={prob.setlist}
          index={index}
          key={uuidv4()}
          item={item}
        />
      ))}
    </>
  );
};

export default RenderList;
