import { useState } from "react";
import Input from "./component/Input.jsx";
import RenderList from "./component/demo2/renderList.jsx";
import arr from "./component/demo2/data.jsx";
import { DivContainer } from "./ui/style.jsx";
const Demo_2 = () => {
  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [list, setList] = useState([
    { name: "SOR NISITH", number: "069907747" },
    ...arr,
  ]);
  const handleAdd = () => {
    if (name == "" || phonenumber == "") return;
    setList([{ name: name, number: phonenumber }, ...list]);
    setName("");
    setPhoneNumber("");
  };

  return (
    <>
      <DivContainer key="demo2" className="fadeIn2">
        <h1 className="title">Demo - Add Phone Book</h1>
        <p></p>
        <hr />
        <div
          style={{
            width: "100%",
            height: "70vh",
            display: "flex",
            justifyContent: "space-between",
          }}
          className="wraper"
        >
          <div
            style={{
              width: "40%",
              display: "flex",
              flexDirection: "column",
            }}
            className="side"
          >
            <Input
              style={{ width: "90%" }}
              value={name}
              set={setName}
              placeholder="Name"
            />
            <Input
              style={{ width: "90%" }}
              type="number"
              value={phonenumber}
              set={setPhoneNumber}
              placeholder="Phone Number"
            />
            <div
              style={{
                flexDirection: "column",
                display: "flex",
                width: "50%",
                zIndex: "100",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
            >
              <button onClick={handleAdd}>Add</button>
              <button
                onClick={() =>
                  setList(list.filter((item, index) => index == -1))
                }
              >
                Clear All
              </button>
              <button onClick={() => setList([...list, ...arr])}>
                Get RandomData
              </button>
            </div>
          </div>
          <div
            style={{
              cursor: "pointer",
              width: "1px",
              height: "inherit",
              top: 0,
              zIndex: 1,
              borderLeft:
                "1px solid rgba(255, 255, 255, 0.3)" /* Optional: Customize the appearance */,
            }}
          ></div>

          <div
            style={{
              height: "100%",
              width: "60%",
              maxHeight: "100vh",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
            className="main"
          >
            <RenderList list={list} setlist={setList} />
          </div>
        </div>
      </DivContainer>
    </>
  );
};

export default Demo_2;
