import React from "react";

export default function AddCourseForm({ courseName, courseScore, onNameChange, onScoreChange, onAdd }) {
	return (
		<div>
			<div>
				<label htmlFor="courseName">Course Name</label>
				<input type="text" id="courseName" value={courseName} onChange={(e) => onNameChange(e.target.value)} />
			</div>
			<div>
				<label htmlFor="courseScore">Course Score</label>
				<input
					type="text"
					id="courseScore"
					value={courseScore}
					onChange={(e) => onScoreChange(e.target.value)}
				/>
			</div>
			<div>
				<button onClick={onAdd}>Add</button>
			</div>
		</div>
	);
}
