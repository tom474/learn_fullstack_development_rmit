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
	const ssn = "123456789";
	// Display current salary
	conn.query("SELECT Ssn, Salary FROM Employee WHERE Ssn = ?", [ssn], (error, res) => {
		res.forEach((row) => console.log(`SSN: ${row.Ssn}, Salary: ${row.Salary}`));

		// Update salary
		conn.query("UPDATE Employee SET Salary = Salary + 1000 WHERE Ssn = ?", [ssn], (error, res) => {
			console.log(`There are ${res.affectedRows} employees affected`);

			// Display updated salary
			conn.query("SELECT Ssn, Salary FROM Employee WHERE Ssn = ?", [ssn], (error, res) => {
				res.forEach((row) => console.log(`SSN: ${row.Ssn}, Salary: ${row.Salary}`));
				conn.destroy();
			});
		});
	});
});
