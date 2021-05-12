import { BinaryTree } from './tree/binary-tree';

const initial = Date.now();
const root = new BinaryTree(50);

const beforeLoop = Date.now();
for (let i = 0; i < 100000; i++) {
  const randomNumber = Math.floor(Math.random() * 1000000);
  root.insert(new BinaryTree(randomNumber));
}

const afterLoop = Date.now();
root.sort();
const end = Date.now();

const insertTime = afterLoop - beforeLoop;
const sortTime = end - afterLoop;
const totalTime = end - initial;

console.log({ insertTime, sortTime, totalTime });
