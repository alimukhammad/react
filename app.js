// page 27-28

import './App.css';
import { useState } from 'react';

function Square({value, onSquareClick}) {

  return(
    <button className='square' onClick={onSquareClick}>{value}</button>
  )
}

function App() {
  const [square, setSquares] = useState(Array(9).fill(null));
  // Array(9).fill(null) creates an array with nine elements and sets each of them to null.
  // useState() call around it declares a squares state variable that’s initially set to that array
  
  // toupdate the squares array, we’ll use the setSquares function returned by useState
  function handleClick(i){
    const nextSquare = square.slice();
    nextSquare[i] = 'X';
    setSquares(nextSquare);
  }

  return (
    <div>
      <h1 className='title'>Tic Tac Toe by Sardor</h1>
      <div className='boardcontainer'>
        <div className='board-row'>
          <Square value={square[0]} onSquareClick={() => handleClick(0)}/>
          <Square value={square[1]}/>
          <Square value={square[2]}/>
        </div>
        <div className='board-row'>
          <Square value={square[3]}/>
          <Square value={square[4]}/>
          <Square value={square[5]}/>
        </div>
        <div className='board-row'>
          <Square value={square[6]}/>
          <Square value={square[7]}/>
          <Square value={square[8]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
