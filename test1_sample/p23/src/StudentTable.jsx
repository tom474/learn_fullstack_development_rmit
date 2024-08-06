import React from "react";

export default function StudentTable({ students }) {
	const data = students.map((students) => {
		let grade = "NN";
		if (students.GPA >= 3) {
			grade = "HD";
		} else if (students.GPA >= 2) {
			grade = "OK";
		}

		return (
			<tr>
				<td>{students.id}</td>
				<td>{students.name}</td>
				<td>{students.GPA}</td>
				<td>{grade}</td>
			</tr>
		);
	});

	return (
        <table>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>GPA</td>
                <td>Grade</td>
            </tr>
            {data}
        </table>
	);
}
