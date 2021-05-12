export interface BinaryTreeProtocol<T> {
  value: T;
  left: BinaryTreeProtocol<T> | null;
  right: BinaryTreeProtocol<T> | null;
  insert(treeNode: BinaryTreeProtocol<T>): this;
  sort(sortedArr: T[]): T[];
  search(searchValue: T): BinaryTreeProtocol<T> | null;
}
