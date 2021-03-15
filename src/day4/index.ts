import fs from 'fs';

type ValidPassportCredentials = {
  byr: string,
  cid?: string,
  ecl: string,
  eyr: string,
  hcl: string,
  hgt: string,
  iyr: string,
  pid: string,
}

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

// const validPassports: number = passportDB.filter(passport => {
//   let isValid: boolean = true;
//   // for (key in passport) {
//   }

// });

console.log(validPassports);
