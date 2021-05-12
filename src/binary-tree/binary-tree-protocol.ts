export interface BinaryTreeProtocol<T> {
  value: T;
  left: BinaryTreeProtocol<T> | null;
  right: BinaryTreeProtocol<T> | null;
  insert(treeNode: BinaryTreeProtocol<T>): this;
  sort(sorted?: T[]): T[];
}
