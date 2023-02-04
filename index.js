function playerFactor(n,m) {
  let score = 0;
  const marker = m;
  const name = n;

  const move = (index,board) => {
    return board.setBoard(index,marker);
  }
  return {name, move, marker}
}

const gameBoard = (() => {
  let board = [];
  for(let r = 0; r < 9; r++) {
    board.push(0)
  }

  const getBoard = () => {
    return board;
  }

  const setBoard = (i, m) => {
    if (board[i]) {
      return false;
    } else {
      board[i] = m;
      return true;
    }
  }

  const checkBoard = () => {
    if (board.every((i) => {return i != 0})) {
      return 'Tie'
    }
    for (let i = 0; i < 3; i++) {
      // horizontal & vertical check
      const h = [];
      const v = [];
      for (let r = 0; r < 3; r++) {
        h.push(board[i*3 + r])
        v.push(board[r*3 + i])
      }
      if (h[0] && h.every((i) => {return i == h[0]})) {
        return h[0]
      } else if (v[0] && v.every((i) => {return i == v[0]})) {
        return v[0]
      }
    }
    if (board[4] != 0 && ((board[0] == board[4] && board == board[8]) || 
    (board[2] == board[4] && board[4] == board[6]))) {
      return board[4]
    } 
    return false
  }

  const resetBoard = () => {
    board = [
      0,0,0,
      0,0,0,
      0,0,0,
    ]
  }

  return { getBoard, setBoard, checkBoard, resetBoard }
})();

const displayController = (()=>{
  // const boxes = document.querySelectorAll('.square')
  


  const indexConvert = (id) => {
    if (typeof(id) == 'string') {
      return id.charCodeAt(0) - 'a'.charCodeAt(0);
    } else {
      return String.fromCharCode(id + 'a'.charCodeAt(0))
    }
  }

  const renderBoard = (board) => {
    for (let i = 0; i < 9; i++) {
      const box = document.querySelector(`#${indexConvert(i)}`);
      box.textContent = board.getBoard()[i] ? board.getBoard()[i] : ''

    }
   }
   return { renderBoard, indexConvert}
})()

function checkWin() {
  const status = gameBoard.checkBoard()
  if (!status) return false
  for(player of players) {
    if (player.marker == status) {
      alert(`Player ${player.name} won!`)
      return true
    }
  }
  alert("It's a tie!")
  return true
}


const players = [playerFactor('a', 'X'), playerFactor('b','O')]
let moves = 0;
let p = players[moves % 2]
const squares = document.querySelectorAll('.square')
squares.forEach(s => {s.addEventListener('click', () => {
  p.move(displayController.indexConvert(s.id), gameBoard)
  displayController.renderBoard(gameBoard)
  moves += 1
  p = players[moves % 2]
  if (checkWin()) {
    gameBoard.resetBoard()
    displayController.renderBoard(gameBoard)
  }
})})



