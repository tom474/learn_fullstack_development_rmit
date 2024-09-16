const fs = require("fs");

const writeNumber = (fd, number, stop) => {
	if (number > stop) {
		fs.close(fd, (error) => {
			console.log("File writing is finished");
		});
		return;
	}
	fs.write(fd, `${number}\n`, (error) => {
		writeNumber(fd, number + 1, stop);
	});
};

fs.open("data/numbers.txt", "w", (error, fd) => {
	if (!error) {
		writeNumber(fd, 1, 100);
	}
});
console.log("Waiting for file writing");
