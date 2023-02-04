function playerFactor() {
  return null
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
    if (!board.includes(0)) {
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
      if (h[0] && h.allEqual()) {
        return h[0]
      } else if (v[0] && v.allEqual()) {
        return v[0]
      }
    }

    if (board[4] != 0 && ((board[0] == board[4] && board == board[8]) || 
    (board[2] == board[4] && board[4] == board[6]))) {
      return board[4]
    } 
    return false
  }
  
  board = [
    0, 0, 0,
    1, 1, 1,
    0, 0, 0,
  ]

  return { getBoard, setBoard, checkBoard }
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
      if (board.getBoard()[i]) {
        const box = document.querySelector(`#${indexConvert(i)}`);
        box.textContent = board.getBoard()[i]
      }
    }
   }
   return { renderBoard, }
})()


displayController.renderBoard(gameBoard)



console.log(gameBoard.checkBoard())