const Sequelize = require("sequelize");
const sequelize = new Sequelize("company", "root", "password", {
	host: "localhost",
	dialect: "mysql",
	logging: false,
});

const Employee = sequelize.define(
	"Employee",
	{
		SSN: { type: Sequelize.STRING, primaryKey: true },
		Fname: Sequelize.STRING,
		Lname: Sequelize.STRING,
		Salary: Sequelize.NUMBER,
	},
	{ tableName: "Employee", timestamps: false }
);

const retrieveAndSave = async () => {
	await sequelize.sync();
	const emp = await Employee.findOne({ where: { SSN: "123456789" } });
	console.log("Before", emp.SSN, emp.Fname, emp.Lname, emp.Salary);

	// Update salary
	emp.Salary = parseInt(emp.Salary) + 1000;
	await emp.save();

	// Retrieve the same record to test
	const emp2 = await Employee.findOne({ where: { SSN: "123456789" } });
	console.log("After", emp2.dataValues.SSN, emp2.dataValues.Fname, emp2.dataValues.Lname, emp2.dataValues.Salary);

	await sequelize.close();
};

retrieveAndSave();
