import React from "react";
import "./style.css";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <h1>Wall Designer</h1>
        <div className="flex flex-row border border-black">
          <div className="border border-green-500">
          <h1>side section</h1>
          </div>
          <div className="flex border border-red-500">
            <h1>main body</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
