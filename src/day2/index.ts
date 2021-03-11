import fs from 'fs';

type PasswordEntry = {
  min: number;
  max: number;
  letter: string;
  password: string;
};

type PolicyCheck = (entry: PasswordEntry) => boolean;

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

const isValidPasswordFirstPolicy: PolicyCheck = (entry) => {
  const characterCount = entry.password
    .split('')
    .filter((letter) => letter === entry.letter).length;
  return characterCount <= entry.max && characterCount >= entry.min;
};

const isValidPasswordSecondPolicy: PolicyCheck = entry => {
  const occurrence1: boolean = entry.password[entry.min - 1] === entry.letter;
  const occurrence2: boolean = entry.password[entry.max - 1] === entry.letter;
  return [occurrence1, occurrence2].filter((occ) => occ).length === 1;
};

const howManyValidPasswords = (database: PasswordEntry[], entryCheck: PolicyCheck): number =>
  database.filter((entry) => entryCheck(entry)).length;

console.log(howManyValidPasswords(passwordDB, isValidPasswordFirstPolicy));
console.log(howManyValidPasswords(passwordDB, isValidPasswordSecondPolicy));
