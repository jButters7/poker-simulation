import React, { useState, useEffect } from 'react';

const Landing = () => {
  const [playerAmount, setPlayerAmount] = useState(0);
  const [startingAmount, setStartingAmount] = useState(0);

  return (
    <div>
      <div>Amount of Players</div>
      <button onClick={() => setPlayerAmount(2)}>2</button>
      <button onClick={() => setPlayerAmount(3)}>3</button>
      <button onClick={() => setPlayerAmount(4)}>4</button>
      <button onClick={() => setPlayerAmount(5)}>5</button>
      <button onClick={() => setPlayerAmount(6)}>6</button>
      <button onClick={() => setPlayerAmount(7)}>7</button>
      <button onClick={() => setPlayerAmount(8)}>8</button>
      <button onClick={() => setPlayerAmount(9)}>9</button>
      <div>Starting Amount</div>
      <input type='number' placeholder='$' onChange={(e) => setStartingAmount(e.target.value)}></input>
      <button>Start Game</button>
      <div>{playerAmount}</div>
      <div>{startingAmount}</div>
    </div>
  )
}
export default Landing;