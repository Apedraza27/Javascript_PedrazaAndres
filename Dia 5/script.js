let ajedrez = [1, R];
ajedrez[0];

ajedrez.length;

let sequence = [1, 1, 2, 3, 5, 8, 13];
for (var i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}

let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

let myArray = myData.split(",");
myArray;

myArray.length;
myArray[0]; // el primer elemento del arreglo
myArray[1]; // el segundo elemento del arreglo
myArray[myArray.length - 1]; // el Ãºltimo elemento del arreglo


let myNewString = myArray.join(",");
myNewString;


let dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.toString(); //Rocket,Flash,Bella,Slugger















/*- Entrada: f c = [fila<espacio>columna]
- Fila: $1 <= f <= 8; f \in N$
- Columna: $1 <= c <= 8; c \in N$

**Nota:** Recuerde que la salida se hace por consola.*/










// Define the size of the chessboard
const N = 8;

// Initialize the chessboard
let board = new Array(N).fill().map(() => new Array(N).fill(0));

// Function to print the solution
function printSolution(board) {
  for (let i = 0; i < N; i++) {
    let row = '';
    for (let j = 0; j < N; j++) {
      // Represent Queens as 'Q' and empty slots as '.'
      row += board[i][j] ? 'Q ' : '. ';
    }
    console.log(row);
  }
}

// Function to check if a queen can be placed on board[row][col]
function isSafe(board, row, col) {
  let i, j;

  // Check the column on the left
  for (i = 0; i < col; i++) {
    if (board[row][i]) return false;
  }

  // Check upper diagonal on the left
  for (i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j]) return false;
  }

  // Check lower diagonal on the left
  for (i = row, j = col; j >= 0 && i < N; i++, j--) {
    if (board[i][j]) return false;
  }

  // The position is safe for placing a queen
  return true;
}

// Recursive utility function to solve N Queen problem
function solveNQUtil(board, col) {
  // Base case: If all queens are placed, return true
  if (col >= N) return true;

  // Consider this column and try placing this queen in all rows one by one
  for (let i = 0; i < N; i++) {
    // Check if the queen can be placed on board[i][col]
    if (isSafe(board, i, col)) {
      // Place this queen in board[i][col]
      board[i][col] = 1;

      // Recur to place the rest of the queens
      if (solveNQUtil(board, col + 1)) return true;

      // If placing queen in board[i][col] doesn't lead to a solution, then backtrack
      board[i][col] = 0;
    }
  }

  // If the queen cannot be placed in any row in this column, return false
  return false;
}

// Function to solve the N Queen problem using the backtracking approach
function solveNQ(startRow, startCol) {
  // Initialize the board with the starting queen
  board[startRow][startCol] = 1;

  if (!solveNQUtil(board, startCol + 1)) {
    console.log("Solution does not exist");
    return false;
  }

  printSolution(board);
  return true;
}