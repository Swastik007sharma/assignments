const { log } = require("console");
const fs = require("fs");

const p1 = new Promise((res, rej) => {
	fs.readFile("4-write-to-file.md", "utf-8", (err, data) => {
		if (err) {
			console.log(err);
		} else {
			console.log(data);
		}
	});
});

p1.then(fs.appendFile(
	"4-write-to-file.md",
	"\nHello i am writing in this file",
	(err) => {
		if (err) {
			console.log(err);
		} else {
			console.log("file saved");
		}
	}
))

fs.readFile("4-write-to-file.md", "utf-8", (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});
