import "./App.css";

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
					<div className="row">
						<div className="col-3">
							<button>7</button>
						</div>
						<div className="col-3">
							<button>8</button>
						</div>
						<div className="col-3">
							<button>9</button>
						</div>
						<div className="col-3">
							<button>/</button>
						</div>
					</div>
					<div className="row">
						<div className="col-3">
							<button>4</button>
						</div>
						<div className="col-3">
							<button>5</button>
						</div>
						<div className="col-3">
							<button>6</button>
						</div>
						<div className="col-3">
							<button>*</button>
						</div>
					</div>
					<div className="row">
						<div className="col-3">
							<button>1</button>
						</div>
						<div className="col-3">
							<button>2</button>
						</div>
						<div className="col-3">
							<button>3</button>
						</div>
						<div className="col-3">
							<button>-</button>
						</div>
					</div>
					<div className="row">
						<div className="col-3">
							<button>0</button>
						</div>
						<div className="col-6">
							<button>=</button>
						</div>
						<div className="col-3">
							<button>+</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
