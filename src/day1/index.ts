import fs from 'fs';

const entries: string = fs.readFileSync(`${__dirname}/input.txt`).toString();

const expenses: number[] = entries
  .split('\n')
  .map((expense) => parseInt(expense, 10));

  const checker = (data: number[]): number | undefined => {
    const thatNum = data.slice(1).filter(expense => data[0] + expense === 2020);
    return thatNum[0]
  }

const multiplyTwoAddends = (data: number[]): number => {
  let result: number = 0;
  data.forEach((_, i) => {
    const secondNum = checker(data.slice(i));
    result = secondNum ? data[i] * secondNum : result;
  });
  return result;
};

const multiplyThreeAddends = (data: number[]): number => {
  let result: number = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      for (let k = 0; k < data.length; k++) {
        if (data[i] + data[j] + data[k] === 2020) {
          result = data[i] * data[j] * data[k];
          break;
        }
      }
    }
  }
  return result;
};

console.log(multiplyTwoAddends(expenses));
console.log(multiplyThreeAddends(expenses));
