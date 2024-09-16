const fs = require("fs");

fs.readFile("data/source.txt", "utf-8", (error, content) => {
	const lines = content.split(/\r?\n/);
	let lineNumber = 1;
	let data = "";
	lines.forEach((line) => {
		if (lineNumber % 2 == 1) {
			data += `${line}\n`;
		}
		lineNumber++;
	});
	fs.writeFile("data/target2.txt", data, (error) => {
		console.log("Finished!");
	});
});
