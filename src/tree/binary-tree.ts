import { BinaryTreeProtocol } from './binary-tree-protocol';

export class BinaryTree<T> implements BinaryTreeProtocol<T> {
  private _left?: BinaryTreeProtocol<T>;
  private _right?: BinaryTreeProtocol<T>;

  constructor(public value: T) {}

  public get left(): BinaryTreeProtocol<T> | undefined {
    return this._left;
  }

  public get right(): BinaryTreeProtocol<T> | undefined {
    return this._right;
  }

  private setRight(node: BinaryTreeProtocol<T> | undefined) {
    this._right = node;
  }

  private setLeft(node: BinaryTreeProtocol<T> | undefined) {
    this._left = node;
  }

  insert(treeNode: BinaryTreeProtocol<T>): this {
    if (treeNode.value > this.value) {
      if (this.right) {
        this.right.insert(treeNode);
      } else {
        this.setRight(treeNode);
      }
    } else if (treeNode.value < this.value) {
      if (this.left) {
        this.left.insert(treeNode);
      } else {
        this.setLeft(treeNode);
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
