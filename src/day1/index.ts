import fs from 'fs';

const entries: string = fs.readFileSync(`${__dirname}/input.txt`).toString();

const expenses: number[] = entries
  .split('\n')
  .map((expense) => parseInt(expense, 10));

  const checker = (data: number[]): number | undefined => {
    const thatNum = data.slice(1).filter(expense => data[0] + expense === 2020);
    return thatNum[0]
  }

const multiplyCorrectAddends = (data: number[]): number => {
  let result: number = 0;
  for (let i = 0; i < data.length; i++) {
    const secondNum = checker(data.slice(i));
    
    if (secondNum) {
      const firstNum: number = data[i];
      result = firstNum * secondNum;
      break;
    }
  }
  return result;
};

console.log(multiplyCorrectAddends(expenses));
