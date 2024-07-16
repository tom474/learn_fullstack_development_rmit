const original = [
	{ id: "s123", name: "Alice", GPA: 3.4 },
	{ id: "s456", name: "Bob", GPA: 2.8 },
	{ id: "s789", name: "Carol", GPA: 3.7 },
	{ id: "s111", name: "David", GPA: 3.2 },
	{ id: "s333", name: "Emily", GPA: 2.7 },
	{ id: "s555", name: "Flora", GPA: 3.8 },
	{ id: "s777", name: "Gabriel", GPA: 2.6 },
	{ id: "s999", name: "Henry", GPA: 3.0 },
];

// Get array of names
console.log(original.map((student) => student.name));

// Get array of students whose GPA >= 3.0
console.log(original.filter((student) => student.GPA >= 3.0));

// Get the average GPA of all students
const average = original.reduce((totalNow, student) => totalNow + student.GPA, 0) / original.length;
console.log(`Average GPA: ${average}`);
