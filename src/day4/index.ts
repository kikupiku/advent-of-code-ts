import fs from 'fs';

const passportDB = fs.readFileSync(`${__dirname}/input.txt`).toString();