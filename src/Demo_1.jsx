import { useState } from "react";
import { DivContainer } from "./ui/style.jsx";

import Demo_3 from "./Demo_3.jsx";
const Demo_1 = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState([]);
  let total = good + bad + neutral;
  let avg = total / 3;
  let positive = neutral + good / 2;
  const handleClick = (setter, getter, reset) => {
    if (reset) {
      setBad(0);
      setNeutral(0);
      setGood(0);
    } else {
      setter(getter + 1);
    }
  };
  return (
    <>
      <DivContainer key="Demo_1" className="fadeIn1">
        <h1 className="title">Demo - Quotes </h1>
        <hr />
        <h2>Give Feedback</h2>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <button onClick={() => handleClick(setGood, good)}>GOOD</button>
          <button onClick={() => handleClick(setNeutral, neutral)}>
            NEUTRAL
          </button>
          <button onClick={() => handleClick(setBad, bad)}>BAD</button>
          <button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => handleClick(0, 0, true)}
          >
            Reset
          </button>
        </div>
        <h2>Statistics</h2>
        <div
          style={{
            paddingBottom: "10px",
            textAlign: "left",
            display: "block",
            height: "auto",
          }}
        >
          <p>Good COUNT : {good}</p>
          <p>Neutral COUNT : {neutral}</p>
          <p>Bad COUNT : {bad}</p>
          <p>TOTAL FeedBack : {total}</p>
          <p>Positive : {positive}</p>
          <p>Average : {avg + "%"}</p>
        </div>
      </DivContainer>
      <Demo_3 />
    </>
  );
};
export default Demo_1;
