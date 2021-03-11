import fs from 'fs';

const roadmap = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .trim()
  .split('\n');

const howManyTrees = (roadmap: string[]): number => {

  const visibleWidth = roadmap[0].length;
  let trees: number = 0;
  let position: number = 0;
  roadmap.forEach((level, i) => {
    trees = level[position] === '#' ? trees + 1 : trees;
    console.log(i + 1 + ' ' + position + ' ' + trees);
    switch (position) {
      case visibleWidth - 1: //30
        position = 2;
        break;
      case visibleWidth - 2: //29
        position = 1;
        break;
      case visibleWidth - 3: //29
        position = 0;
        break;
      default:
        position += 3;
    }
  });
  return trees;
};

console.log(howManyTrees(roadmap));
