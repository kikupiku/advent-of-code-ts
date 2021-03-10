import fs from 'fs';

type PasswordEntry = {
  min: number;
  max: number;
  letter: string;
  password: string;
};

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

const isValidPassword = (entry: PasswordEntry): boolean => {
  if (entry.password !== null) {
    const regex = new RegExp(`ReGeX${entry.letter}ReGeX`);
    const characterCount = entry[password].match(regex.global || []).length;
    let isValid =
      characterCount >= entry.max && characterCount <= entry.min ? true : false;
    return isValid;
  } else {
    return false;
  }
};

const howManyValidPasswords = (database: PasswordEntry[]): number => {
    let validPasswordCount = 0;
  database.forEach(entry => {
    validPasswordCount = isValidPassword(entry) ? validPasswordCount++ : validPasswordCount;
    return validPasswordCount;
  })
  return validPasswordCount;
};

console.log(howManyValidPasswords(passwordDB));
