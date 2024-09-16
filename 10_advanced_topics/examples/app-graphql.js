const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat } = require("graphql");

const students = [
	{ id: 1, name: "Alice", major: "IT", GPA: 3.3 },
	{ id: 2, name: "Bob", major: "SE", GPA: 3.2 },
	{ id: 3, name: "Carol", major: "SE", GPA: 2.8 },
	{ id: 4, name: "David", major: "IT", GPA: 3.1 },
];

const scores = [
	{ course: "Full Stack Dev", student_id: 1, score: 3.3 },
	{ course: "Full Stack Dev", student_id: 2, score: 3.1 },
	{ course: "Full Stack Dev", student_id: 3, score: 2.7 },
	{ course: "Database Applications", student_id: 1, score: 3.6 },
	{ course: "Database Applications", student_id: 4, score: 3.4 },
];

const findStudent = (id) => {
	return students.find((student) => student.id === id);
};

const getStudentName = (id) => {
	return findStudent(id).name;
};

const getStudentScores = (id) => {
	return scores.filter((score) => score.student_id === id);
};

const ScoreType = new GraphQLObjectType({
	name: "Score",
	fields: {
		course: { type: GraphQLString },
		student_name: {
			type: GraphQLString,
			resolve: (course) => getStudentName(course.student_id),
		},
		score: { type: GraphQLFloat, resolve: (course) => course.score },
	},
});

const StudentType = new GraphQLObjectType({
	name: "Student",
	fields: {
		id: { type: GraphQLInt },
		name: { type: GraphQLString },
		major: { type: GraphQLString },
		total: { type: GraphQLFloat, resolve: (student) => student.GPA },
		scores: { type: new GraphQLList(ScoreType), resolve: (student) => getStudentScores(student.id) },
	},
});

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "Query",
		fields: {
			students: {
				type: new GraphQLList(StudentType),
				resolve: () => students,
			},
			student: {
				type: StudentType,
				args: { id: { type: GraphQLInt } },
				resolve: (parent, args) => findStudent(args.id),
			},
		},
	}),
});

const app = express();
const port = 2222;

app.all("/graphql", createHandler({ schema }));

app.listen(port, () => {
	console.log("Server is running on port http://localhost:2222");
});
