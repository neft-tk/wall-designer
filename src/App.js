import React, { useState } from "react";
import "./style.css";

function App() {

  const [tileData, setTileData] = useState([["one", "one and a half"],["two"]]);


  return (
    <>
      <div className="flex flex-col">
        <h1>Wall Designer</h1>
        <div className="flex flex-row border border-black">
          <div className="border border-green-500">
          <h1>side section</h1>
          </div>
          <div className="flex flex-col border border-red-500">
            <h1>main body</h1>
            <h1>
              {tileData}
              </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
