export default class Node{
  constructor([x,y],path) {
    this.position = x >= 0 && x <= 7 && y >= 0 && y <= 7 ? [x, y] : null;
    this.path = this.position ? path : null;
  }
}