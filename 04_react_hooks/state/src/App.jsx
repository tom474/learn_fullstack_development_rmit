import { useState } from "react";
import Button from "./Button";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
	const [calcState, setCalcState] = useState({ prevNumber: 0, currentNumber: 0, operator: "+" });

	const calcButtons = [
		[
			{ cols: 1, value: 7, type: "digit" },
			{ cols: 1, value: 8, type: "digit" },
			{ cols: 1, value: 9, type: "digit" },
			{ cols: 1, value: "/", type: "operator" },
		],
		[
			{ cols: 1, value: 4, type: "digit" },
			{ cols: 1, value: 5, type: "digit" },
			{ cols: 1, value: 6, type: "digit" },
			{ cols: 1, value: "*", type: "operator" },
		],
		[
			{ cols: 1, value: 1, type: "digit" },
			{ cols: 1, value: 2, type: "digit" },
			{ cols: 1, value: 3, type: "digit" },
			{ cols: 1, value: "-", type: "operator" },
		],
		[
			{ cols: 1, value: 0, type: "digit" },
			{ cols: 2, value: "=", type: "result" },
			{ cols: 1, value: "+", type: "operator" },
		],
	];

	function handleClick(type, value) {
		switch (type) {
			case "digit":
				// Update current
				const newValue = calcState.currentNumber * 10 + value;
				setCalcState({ ...calcState, currentNumber: newValue });
				break;
			case "operator":
				setCalcState({prevNumber: calcState.currentNumber, currentNumber: 0, operator: value});
				break;
			case "result":
				const result = eval(`${calcState.prevNumber} ${calcState.operator} ${calcState.currentNumber}`);
				const newState = { ...calcState, prevNumber: calcState.currentNumber, currentNumber: result };
				setCalcState(newState);
		}
	}

	const buttons = calcButtons.map((row) => {
		const rowButtons = row.map((btn) => (
			<Button key={btn.value} cols={btn.cols} value={btn.value} type={btn.type} onClick={handleClick} />
		));
		return <div className="row">{rowButtons}</div>;
	});

	return (
		<div className="App">
			<h1>Calculator</h1>
			<div className="container">
				<div className="row">
					<div className="col">
						<input type="text" readOnly={true} value={calcState.currentNumber} />
					</div>
				</div>
				{buttons}
			</div>
		</div>
	);
}

export default App;
