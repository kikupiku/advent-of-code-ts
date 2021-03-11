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

const passportDB: string[][][] = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .trim()
  .split('\n\n')
  .map((passport) => {
    const credentials = passport.replace(/\n/g, ' ').split(' ').map(credential => credential.split(':'));
    return credentials;;
  });

console.log(passportDB);
