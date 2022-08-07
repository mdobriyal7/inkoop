import React from "react";

function App() {
  const [data, setdata] = React.useState("");
  const [counter, setcounter] = React.useState([]);

  function handleinput(event) {
    if (event.target.value < 0) {
      setdata("Enter a Positive Value");
    } else {
      setdata("");
    }
  }

  function valuehandler(event) {
    let inpNo = event.target.value;
    if (inpNo != 0) {
      const value1 = Number(inpNo) + Number(2);
      const value2 = Number(inpNo) + Number(4);
      const value3 = Number(inpNo) + Number(6);
      setcounter([value1, value2, value3]);
    } else {
      setcounter([]);
    }
  }
  return (
    <div style={{ margin: "0px", padding: "0px" }}>
      <div style={{ position: "absolute", left: "40%", top: "150px" }}>
        <input
          id="inpfield"
          type="number"
          onChange={handleinput}
          style={{
            border: "2px solid black",
            borderRadius: "4px",
            height: "20px",
          }}
        />
        <p>{data}</p>
      </div>
      <div style={{ position: "absolute", left: "40%", top: "300px" }}>
        <input
          id="inpfield"
          type="number"
          onChange={valuehandler}
          style={{
            border: "2px solid black",
            borderRadius: "4px",
            height: "20px",
          }}
        />
        <p>
          {counter[0]} {counter[1]} {counter[2]}
        </p>
      </div>
    </div>
  );
}

export default App;
