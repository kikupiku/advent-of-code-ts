import fs from 'fs';

interface PassportCredentials {
  byr?: string;
  cid?: string;
  ecl?: string;
  eyr?: string;
  hcl?: string;
  hgt?: string;
  iyr?: string;
  pid?: string;
  isValid?: boolean;
};

const passportDB: {}[] = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .trim()
  .split('\n\n')
  .map((passport) => {
    const credentials = passport
      .replace(/\n/g, ' ')
      .split(' ')
      .map((credential) => credential.split(':'));
    return credentials;
  })
  .map((passport) => Object.fromEntries(passport));

const checkPassports = (database: {}[]): {}[] => {
  database.map((passport) => {
    if (
      passport.hasOwnProperty('byr') &&
      passport.hasOwnProperty('ecl') &&
      passport.hasOwnProperty('eyr') &&
      passport.hasOwnProperty('hcl') &&
      passport.hasOwnProperty('hgt') &&
      passport.hasOwnProperty('iyr') &&
      passport.hasOwnProperty('pid')
    ) {
      Object.assign(passport, { isValid: true });
    } else {
      Object.assign(passport, { isValid: false });
    }
  });
  return database;
};

const howManyValidPassports = (database: PassportCredentials[]): number => {
  return checkPassports(database).filter((passport: any) => passport.isValid).length;  //how to solve it without "any"?
};

console.log(howManyValidPassports(passportDB));
