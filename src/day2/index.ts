import fs from 'fs';

interface FirstValidationEntry {
  min: number;
  max: number;
  character: string;
  password: string;
}

interface SecondValidationEntry {
  positionOne: number;
  positionTwo: number;
  character: string;
  password: string;
}

type PasswordEntry = FirstValidationEntry | SecondValidationEntry;

const puzzleInput = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .trim()
  .split('\n')
  .map((entry) => /(\d+)-(\d+) (.): (.*)/.exec(entry)!.slice(1, 5));

const getPasswordDB = (input: string[][], validationType: number): PasswordEntry[] => {
  return input.map((element) => {
    switch (validationType) {
      case 1:
        return {
          min: parseInt(element[0]),
          max: parseInt(element[1]),
          character: element[2],
          password: element[3],
        };
      default:        // case 2
        return {
          positionOne: parseInt(element[0]),
          positionTwo: parseInt(element[1]),
          character: element[2],
          password: element[3],
        };
    }
  });
};

const isValidPasswordFirstPolicy = (input: FirstValidationEntry) => {
  const characterCount = input.password
    .split('')
    .filter((letter) => letter === input.character).length;
  return (
    characterCount <= input.max && characterCount >= input.min
  );
};

const isValidPasswordSecondPolicy = (input: SecondValidationEntry) => {
  const occurrence1: boolean =
    input.password[input.positionOne - 1] === input.character;
  const occurrence2: boolean =
    input.password[input.positionTwo - 1] === input.character;
  return [occurrence1, occurrence2].filter((occ) => occ).length === 1;
};

const howManyValidPasswords = (policy: number): number => {
  const entries = getPasswordDB(puzzleInput, policy);
  const correctEntries =  entries.filter((entry: PasswordEntry) => {
    switch (policy) {
      case 1:
        return isValidPasswordFirstPolicy(entry as FirstValidationEntry);
      default:      // case 2
        return isValidPasswordSecondPolicy(entry as SecondValidationEntry);
    }
  });
  return correctEntries.length;
}

console.log(howManyValidPasswords(1));
console.log(howManyValidPasswords(2));