import { BinaryTree } from './binary-tree/binary-tree';

const initial = Date.now();
const root = new BinaryTree(50);
const set = new Set([50]);

const beforeLoop = Date.now();

for (let i = 0; i < 100000; i++) {
  const randomNumber = Math.floor(Math.random() * 1000000);
  set.add(randomNumber);
  root.insert(new BinaryTree(randomNumber));
}

const afterLoop = Date.now();
const arr = [...set].sort((a, b) => a - b);
const sortedRoot = root.sort();
const end = Date.now();

console.log(JSON.stringify(arr) === JSON.stringify(sortedRoot));

const insertTime = afterLoop - beforeLoop;
const sortTime = end - afterLoop;
const totalTime = end - initial;

console.log({ insertTime, sortTime, totalTime });
