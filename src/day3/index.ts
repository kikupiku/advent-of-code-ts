import fs from 'fs';

const roadmap = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .trim()
  .split('\n');

const visibleWidth = roadmap[0].length;

const movePosition = (position: number, right: number): number => {
  const difference = visibleWidth - position;
  return position + right < visibleWidth
    ? position + right
    : right - difference;
};

const howManyTrees = (
  roadmap: string[],
  right: number,
  down: number
): number => {
  let trees: number = 0;
  let position: number = 0;
  roadmap.forEach((level, i) => {
    if (down === 1 || (down === 2 && i % 2 === 0)) {
      trees = level[position] === '#' ? trees + 1 : trees;
      position = movePosition(position, right);
    }
  });
  return trees;
};

const allTreesMultiplied = (): number => {
  return (
    howManyTrees(roadmap, 1, 1) *
    howManyTrees(roadmap, 3, 1) *
    howManyTrees(roadmap, 5, 1) *
    howManyTrees(roadmap, 7, 1) *
    howManyTrees(roadmap, 1, 2)
  );
}

console.log(allTreesMultiplied());
