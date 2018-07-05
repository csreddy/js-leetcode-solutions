/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  return computeState(board);
};

var findLiveNeighbors = function (board, i, j) {
  const rows = board.length;
  const cols = board[0].length;
  let lives = 0;
  for (let x = Math.max(i - 1, 0); x <= Math.min(i + 1, rows - 1); x++) {
    for (let y = Math.max(j - 1, 0); y <= Math.min(j + 1, cols - 1); y++) {
      lives += board[x][y] & 1;
    }
  }
  lives -= board[i][j] & 1;
  return lives;
}

var computeState = function (board) {
  const rows = board.length;
  const cols = board[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let lives = findLiveNeighbors(board, i, j);
      switch (lives) {
        case 0:
        case 1:
          board[i][j] = 0;
          break;
        case 2:
        case 3:
          board[i][j] = 1;
          break;
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
          board[i][j] = 0;
          break;
        default:
          break;
      }
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      board[i][j] >>= 1; // Get the 2nd state.
    }
  }
  return board;
};

const board = [
  [1]
]
console.log(gameOfLife(board));
