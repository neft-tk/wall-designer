import React, { useState } from "react";
import "./style.css";

function App() {
  const [tileData, setTileData] = useState([
    [
      { id: 1, name: "one" },
      { id: 2, name: "two" },
      { id: 3, name: "three" },
    ],
    [
      { id: 4, name: "four" },
      { id: 5, name: "five" },
      { id: 6, name: "six" },
    ],
    [
      { id: 7, name: "seven" },
      { id: 8, name: "eight" },
      { id: 9, name: "nine" },
    ],
  ]);

  return (
    <>
      <div className="flex flex-col">
        <h1>Wall Designer</h1>
        <div className="flex flex-row border border-black">
          <div className="border border-green-500">
            <h1>side section</h1>
          </div>
          <div className="flex flex-col w-full border border-red-500">
            <h1>main body</h1>

              {tileData.map((tileArrayData, index) => (
                <ul key={index} className="flex flex-row justify-between">
                  {tileArrayData.map(tile => (
                    <l1 key={tile.id} className="tile m-5">{tile.name}</l1>
                  ))}
                </ul>
              ))}

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
