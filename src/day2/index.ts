import fs from 'fs';

const puzzleInput = fs.readFileSync(`${__dirname}/input.txt`).toString()
const inputs = puzzleInput.split('\n').map(element => element.split(': ').map(el => [el]));

const passwordDB: {} = Object.fromEntries(inputs);

console.log(passwordDB);