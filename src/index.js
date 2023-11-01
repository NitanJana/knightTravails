import KnightMoves from "./modules/knightMoves.js";

const startPosition = [3, 3];
const endPosition = [6, 3];

const path = KnightMoves.knightMoves(startPosition, endPosition);

if (path) {
  console.log(`you reached position [${endPosition}] in ${path.length - 1} moves.\nHere is your path: `);

  for (let i = 0; i < path.length - 1; i += 1) {
    process.stdout.write(`${path[i]} -> `);
  }
  process.stdout.write(`${path[path.length-1]}\n`); // Add a newline at the end
} else {
  console.log("Invalid Start/End position");
}
