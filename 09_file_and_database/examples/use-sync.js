const fs = require("fs");

const fd = fs.openSync("data/numbers1.txt", "w");
for (let index = 1; index <= 100; index++) {
	fs.writeSync(fd, `${index}\n`);
}
fs.closeSync(fd);
