import fs from 'fs';

const puzzleInput = fs.readFileSync(`${__dirname}/input.txt`).toString().replace(/\:/g, '').replace(/-/g, ' ').split('\n').map(element => element.split(' '));
const passwordDB: object[] = puzzleInput.map(element => {
  return {
    "min": element[0],
    "max": element[1],
    "letter": element[2],
    "password": element[3],
  }
});

console.log(passwordDB);


