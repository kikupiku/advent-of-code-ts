import fs from 'fs';

const puzzleInput = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .replace(/:/g, '')
  .replace(/-/g, ' ')
  .split('\n')
  .map((element) => element.split(' '));
const passwordDB = puzzleInput.map((element) => {
  return {
    min: parseInt(element[0]),
    max: parseInt(element[1]),
    letter: element[2],
    password: element[3],
  };
});

const hasMinimum = (database: object): boolean => {

  return true;
};

const isLessThanMaximum = (database: object): boolean => {
  return true;
};

const howManyValidPasswords = (min: () => {}, max: () => {}): number => {
  return 0;
}

console.log(passwordDB);
