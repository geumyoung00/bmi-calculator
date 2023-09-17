import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(160);
  const weightHandler = (e) => {
    setWeight(e.target.value);
  };
  const heightHandler = (e) => {
    setHeight(e.target.value);
  };

  const heightCalc = (height / 100) * (height / 100);
  //   console.log(heightCalc);

  const bmiCalc = weight / heightCalc;

  return (
    <main>
      <h1>Project 4: BMI CALCULATOR</h1>
      <div className="input-section">
        {/* <p className="slider-output">Weight: 50 kg</p> */}
        <p className="slider-output">{`Weight: ${weight} kg`}</p>
        <input
          className="input-slider"
          type="range"
          min="40"
          max="220"
          step="1"
          defaultValue={weight}
          onChange={weightHandler}
        />
        {/* <p className="slider-output">Height: 160 cm</p> */}
        <p className="slider-output">{`Height: ${height} cm`}</p>
        <input
          className="input-slider"
          type="range"
          min="140"
          max="220"
          step="1"
          defaultValue={height}
          onChange={heightHandler}
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{bmiCalc.toFixed(2)}</p>
      </div>
    </main>
  );
}

export default App;
