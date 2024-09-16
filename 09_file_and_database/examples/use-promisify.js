const fs = require("fs");
const util = require("util");

const open = util.promisify(fs.open);
const write = util.promisify(fs.write);
const close = util.promisify(fs.close);

const runMe = async () => {
	const fd = await open("data/numbers2.txt", "w");
	for (let index = 1; index <= 100; index++) {
		await write(fd, `${index}\n`);
	}
	await close(fd);
};

runMe().then(() => {
	console.log("Writing is finished");
});
