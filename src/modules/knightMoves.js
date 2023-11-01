import Node from "./node.js";

export default class KnightMoves {
  static knightMoves([startX, startY], [endX, endY]) {

     // Check if both start and end positions are valid
     if (
       !Node.isValidPosition(startX, startY) ||
       !Node.isValidPosition(endX, endY)
     ) {
       return null;
     }
    const queue = [new Node([startX, startY], [[startX, startY]])];

    while (queue.length > 0) {
      const currentNode = queue.shift();

      if (
        currentNode.position[0] === endX &&
        currentNode.position[1] === endY
      ) {
        return currentNode.path;
      }

      const offsets = [
        [1, 2],
        [1, -2],
        [2, 1],
        [2, -1],
        [-1, 2],
        [-1, -2],
        [-2, 1],
        [-2, -1],
      ];

      offsets.forEach((offset) => {
        const move = [
          currentNode.position[0] + offset[0],
          currentNode.position[1] + offset[1],
        ];

        const node = new Node(move, currentNode.path.concat([move]));
        if (node.position) {
          queue.push(node);
        }
      });
    }
    const finalPath = queue.shift().path;
    if (finalPath) return finalPath;

    return null; 
  }
}