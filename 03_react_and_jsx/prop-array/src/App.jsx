import "bootstrap/dist/css/bootstrap.css";
import Button from "./Button.jsx";
import "./App.css";

const calcButtons = [
	[
		{ cols: 1, value: 7 },
		{ cols: 1, value: 8 },
		{ cols: 1, value: 9 },
		{ cols: 1, value: "/" },
	],
	[
		{ cols: 1, value: 4 },
		{ cols: 1, value: 5 },
		{ cols: 1, value: 6 },
		{ cols: 1, value: "*" },
	],
	[
		{ cols: 1, value: 1 },
		{ cols: 1, value: 2 },
		{ cols: 1, value: 3 },
		{ cols: 1, value: "-" },
	],
	[
		{ cols: 1, value: 0 },
		{ cols: 2, value: "=" },
		{ cols: 1, value: "+" },
	],
];

const buttons = calcButtons.map((row) => {
	const rowButtons = row.map((btn) => <Button cols={btn.cols} value={btn.value} />);
	return (
		<>
			<div className="row">{rowButtons}</div>
		</>
	);
});

function App() {
	return (
		<>
			<div className="App">
				<h1>Calculator</h1>
				<div className="container">
					<div className="row">
						<div className="col">
							<input type="text" />
						</div>
					</div>
					{buttons}
				</div>
			</div>
		</>
	);
}

export default App;
