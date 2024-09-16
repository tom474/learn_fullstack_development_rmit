const mysql = require("mysql");

const conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "company",
});

conn.connect((error) => {
	if (error) {
		throw error;
	}
	console.log("Connected to MySQL database successfully!");
	conn.destroy();
	console.log("Connection terminated!");
});
