import React from 'react';
import './App.css';

function App() {
	return (
		<main>
			<h1>Project 4: BMI CALCULATOR</h1>
			<div className="input-section">
				<p class="slider-output">Weight: 50 kg</p>
				<input className="input-slider" />
				<p class="slider-output">Height: 160 cm</p>
				<input className="input-slider" />
			</div>
			<div className="output-section">
				<p>Your BMI is</p>
				<p className="output">{20}</p>
			</div>
		</main>
	);
}

export default App;
