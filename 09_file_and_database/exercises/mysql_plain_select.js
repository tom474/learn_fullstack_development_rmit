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
	conn.query("SELECT * FROM Employee", (error, rows) => {
		if (error) {
			throw error;
		}
		rows.forEach((row) => console.log(row.Fname, row.Lname));
		conn.destroy();
	});
});
