function countMines(row, cellIndex) {
    let count = 0;
  
    if (row[cellIndex] === '*') {
      count += 1;
    }
  
    if (row[cellIndex - 1] === '*') {
      count += 1;
    }
  
    if (row[cellIndex + 1] === '*') {
      count += 1;
    }
  
    return count;
  }
  //returning a map of the mines total, the board is what is input for the mines
  export const annotate = (board) =>  {
    return board.map((current, rowIndex) => current
    .split('')
    .reduce((rowSoFar, cellValue, cellIndex, cells) => {
      if (cellValue === '*') {
        return rowSoFar + cellValue;
      }
  
      let count = countMines(cells, cellIndex);
  
      let tmp = board[rowIndex - 1];
      if (tmp) {
        count += countMines(tmp.split(''), cellIndex);
      }
  
      tmp = board[rowIndex + 1];
      if (tmp) {
        count += countMines(tmp.split(''), cellIndex);
      }
  
      return `${rowSoFar}${count || ' '}`;
    }, ''));
  
  }