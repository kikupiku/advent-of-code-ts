import fs from 'fs';

interface PassportCredentials {
  byr?: number;
  cid?: string;
  ecl?: string;
  eyr?: number;
  hcl?: string;
  hgt?: number;
  iyr?: number;
  pid?: string;
  isValid?: boolean;
};

const numericCredentials = ['byr', 'eyr', 'hgt', 'iyr', 'pid'];

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
  .map((passport) =>
    Object.fromEntries(passport));

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

const additionalChecks = (database: PassportCredentials[]) => {
  let isValid = true;
  database.forEach(passport => {

    for (let key in passport) {
      // let value = parseInt(`${passport[key]}`);
      switch (key) {
        case 'byr':
          isValid = (value >= 1920 && value <= 2002);
          break;
        case 'iyr':
          isValid = (value >= 2010 && value <= 2020);
          break;
        case 'eyr':
          isValid = (value >= 2020 && value <= 2030);
          break;
        case 'hgt':
          // isValid = 
          break;
        case 'hcl':
          if (typeof value === 'string' && value[0] !== '#') {
            isValid = false;
            break;
          } 
      }
    }
  })
}

console.log(passportDB);
