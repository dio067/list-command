#!/usr/bin/env node
const fs = require('fs');
const chalk = require('chalk');

fs.readdir(process.cwd(), async (err, filenames) => {
    if (err) {
        console.log(err);
    } 

	for (let filename of filenames) {
		try {
			const stat = await fs.promises.lstat(filename);

                if(stat.isFile()) {
                    console.log(filename,' ');
                } else {
                    console.log(chalk.bold(chalk.blue(filename)),' ');
                }

		} catch (err) {
			console.log(err);
		}
	}
})