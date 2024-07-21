import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import StudentTable from "./StudentTable";

const students = [
	{ id: 1, name: "Alice", major: "Information Technology", GPA: 3.2 },
	{ id: 2, name: "Bob", major: "Software Engineering", GPA: 3.6 },
	{ id: 3, name: "Carol", major: "Computer Science", GPA: 3.0 },
	{ id: 4, name: "David", major: "Information Systems", GPA: 2.9 },
];

function App() {
	return (
		<>
			<div className="container">
				<StudentTable data={students} />
			</div>
		</>
	);
}

export default App;
