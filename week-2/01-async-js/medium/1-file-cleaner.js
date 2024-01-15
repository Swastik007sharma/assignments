const fs = require("fs").promises;

async function fileCleaner() {
	try {
		let recivedData = await fs.readFile("a.txt", "utf-8");
		console.log(recivedData);
		let cleanedData = recivedData.replace(/\s+/g, ' ');

        console.log(cleanedData);

		await fs.writeFile("a.txt", cleanedData);
	} catch (err) {
		console.log(err);
	}
}

fileCleaner()