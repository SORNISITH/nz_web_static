import { useState } from "react";
import { Icon, DivContainer } from "./ui/style.jsx";

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  "The only way to go fast, is to go well.",
];
const transformAnecdotes = anecdotes.reduce((acc, value, index) => {
  acc[index] = { value, score: 999 + 19 * index };
  return acc;
}, {});

const Demo_3 = () => {
  const [index, setIndex] = useState(0);
  const [vote, setVote] = useState(transformAnecdotes);
  const handleScore = (index) => {
    setVote({ ...vote, [index]: { score: vote[index].score + 1 } });
  };
  const handleIndex = (ops) => {
    setIndex(ops == "+" ? index + 1 : index - 1);
  };
  const handlePev = () => {
    index == 0 ? "" : handleIndex("-");
  };
  return (
    <>
      <DivContainer key="Demo_3" className="fadeIn3">
        <h1>DEMO 3 - Quote Slide</h1>
        <h1>
          <a href="https://www.comp.nus.edu.sg/~damithch/pages/SE-quotes.htm">
            Quote for software enginneer
          </a>
        </h1>
        <hr />
        <h3
          style={{
            padding: "20px",
            fontSize: "1.9rem",
            height: "15vh",
            textAlign: "justify",
          }}
        >
          {anecdotes[index]}
          <p
            style={{
              color: "black",
              backgroundColor: "lightgreen",
              borderRadius: "5px",
            }}
          >
            {" "}
            {vote[index].score + " Voted "}
          </p>
        </h3>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={() => handleScore(index)}>
            Vote {vote[index].score}
          </button>
          <button
            onClick={
              index == anecdotes.length - 1
                ? console.log("err")
                : () => handleIndex("+")
            }
          >
            Next Quote
          </button>
          <button onClick={handlePev}>Prev Quote</button>
        </div>
      </DivContainer>
    </>
  );
};

export default Demo_3;
