import { useState } from "react";
import DynamicStudentTable from "./DynamicStudentTable.jsx";
import AddCourseForm from "./AddCourseForm";
import "./App.css";

const courses = [
	{ name: "Full Stack Development", score: 2 },
	{ name: "Algorithms", score: 3 },
	{ name: "Database Applications", score: 4 },
];

function App3() {
	const [activeCourse, setActiveCourse] = useState(courses);
	const [courseName, setCourseName] = useState("");
	const [courseScore, setCourseScore] = useState(0);

	function handleDelete(courseName) {
		const newData = activeCourse.filter((course) => course.name != courseName);
		setActiveCourse(newData);
	}

	function handleNameChange(newName) {
		setCourseName(newName);
	}

	function handleScoreChange(newScore) {
		setCourseScore(newScore);
	}

	function handleAdd() {
		setActiveCourse([...activeCourse, { name: courseName, score: parseFloat(courseScore) }]);
	}

	return (
		<div className="App3">
			<DynamicStudentTable onDelete={handleDelete} courses={activeCourse} />
			<AddCourseForm
				courseName={courseName}
				courseScore={courseScore}
				onNameChange={handleNameChange}
				onScoreChange={handleScoreChange}
				onAdd={handleAdd}
			/>
		</div>
	);
}

export default App3;
