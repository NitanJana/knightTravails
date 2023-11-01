export default class Node {
  constructor([x, y], path) {
    this.position = Node.isValidPosition(x, y) ? [x, y] : null;
    this.path = this.position ? path : null;
  }

  static isValidPosition(x, y) {
    return x >= 0 && x <= 7 && y >= 0 && y <= 7;
  }
}
