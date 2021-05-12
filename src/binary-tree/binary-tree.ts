import { BinaryTreeProtocol } from './binary-tree-protocol';

export class BinaryTree<T> implements BinaryTreeProtocol<T> {
  public left: BinaryTreeProtocol<T> | null = null;
  public right: BinaryTreeProtocol<T> | null = null;

  constructor(public value: T) {}

  insert(treeNode: BinaryTreeProtocol<T>): this {
    if (treeNode.value > this.value) {
      if (this.right) {
        this.right.insert(treeNode);
      } else {
        this.right = treeNode;
      }
    } else if (treeNode.value < this.value) {
      if (this.left) {
        this.left.insert(treeNode);
      } else {
        this.left = treeNode;
      }
    }

    return this;
  }

  sort(sorted: T[] = []): T[] {
    if (!this.left) {
      sorted.push(this.value);
      if (this.right) {
        this.right.sort(sorted);
      }
      return sorted;
    }

    if (this.left) {
      this.left.sort(sorted);
    }

    sorted.push(this.value);

    this.right?.sort(sorted);

    return sorted;
  }
}
