function playerFactor() {
  return null
}

const gameBoard = (() => {
  const board = [];
  for(let r = 0; r < 9; r++) {
    board.push(0)
  }
  
  const getBoard = () => {
    return board;
  }
  return { getBoard }
})();

const displayController = (()=>{
  const boxes = document.querySelectorAll('.square')
  console.log(boxes)
  const renderBoard = (board) => {
    const boxes = document.querySelectorAll()
    for (const item of board) {
      let a;
    }
   }
})()




