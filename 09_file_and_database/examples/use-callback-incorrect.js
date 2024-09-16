const fs = require("fs");

fs.open("data/wrong_numbers.txt", "w", (error, fd) => {
	if (!error) {
		for (let i = 1; i <= 100; i++) {
			fs.write(fd, `${i}\n`, (error) => {
				// Do nothing
			});
		}
		fs.close(fd, (error) => {
			console.log("File writing is finished");
		});
	}
});

console.log("Waiting for file writing");
