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
  .trim()
  .replace(/:/g, '')
  .replace(/-/g, ' ')
  .split('\n')
  .map((element) => element.split(' '));
  
const passwordDB: PasswordEntry[] = puzzleInput.map((element) => {
  return {
    min: parseInt(element[0]),
    max: parseInt(element[1]),
    letter: element[2],
    password: element[3],
  };
});

const isValidPassword = (entry: PasswordEntry): boolean => {
  const characterCount = entry.password
    .split('')
    .filter((letter) => letter === entry.letter).length;
  return characterCount <= entry.max && characterCount >= entry.min;
};

const howManyValidPasswords = (database: PasswordEntry[]): number =>
  database.filter((entry) => isValidPassword(entry)).length;

console.log(howManyValidPasswords(passwordDB));
