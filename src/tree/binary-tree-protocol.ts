export interface BinaryTreeProtocol<T> {
  value: T;
  left?: BinaryTreeProtocol<T>;
  right?: BinaryTreeProtocol<T>;
  insert(treeNode: BinaryTreeProtocol<T>): this;
  sort(sorted?: T[]): T[];
}
