

//first define the mines
const MINE = '*';

/**
 * Next creat a function that parses the given `board`, generating a "map" indicating where mines are.
 * the board will be an array of strings and will return and array of arrays that are booleans on the board

 */
const parseBoard = board => board.map(row => Array.from(row).map(cell => cell === MINE));

/**
 * Checks if there is a mine at the given `x, y` coordinates.
 * inputs will be a minefield as an array of booleans 
 * and also the x and y coordinates as numbers
 * returns a boolean
 */
const isMineAt = (minefield, x, y) => (minefield[x] ? minefield[x][y] : false);

/**
 * Annotates a given Minesweeper `board` with counts of the surrounding mines for each cell.
 *
 * paramater is a board and will return an array of strings
 *
 * 
 */
export const annotate = (board) => {
  const minefield = parseBoard(board);

  return board.map((row, x) => row.replace(/ /g, (char, y) => {
    let mines = 0;

    mines += isMineAt(minefield, x - 1, y - 1) ? 1 : 0;
    mines += isMineAt(minefield, x - 1, y) ? 1 : 0;
    mines += isMineAt(minefield, x - 1, y + 1) ? 1 : 0;

    mines += isMineAt(minefield, x, y - 1) ? 1 : 0;
    mines += isMineAt(minefield, x, y + 1) ? 1 : 0;

    mines += isMineAt(minefield, x + 1, y - 1) ? 1 : 0;
    mines += isMineAt(minefield, x + 1, y) ? 1 : 0;
    mines += isMineAt(minefield, x + 1, y + 1) ? 1 : 0;

    return `${mines || char}`;
  }));
};
