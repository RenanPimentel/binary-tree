import { BinaryTree } from './binary-tree/binary-tree';

const initial = Date.now();
const root = new BinaryTree(10000000 / 2);

const beforeLoop = Date.now();

for (let i = 0; i < 100000; i++) {
  const randomNumber = Math.floor(Math.random() * 10000000);
  root.insert(new BinaryTree(randomNumber));
}

const afterLoop = Date.now();
const sortedRoot = root.sort();
const end = Date.now();

const insertTime = afterLoop - beforeLoop;
const sortTime = end - afterLoop;
const totalTime = end - initial;

console.log({ insertTime, sortTime, totalTime, sortedRoot });
