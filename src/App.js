import React, { useState } from 'react';

function countInitial() {
  console.log('run function');
  return 4
}

function App() {

  // Runs every time
  // const [count, setCount] = useState(countInitial())

  // Runs first time only
  const [count, setCount] = useState(() => {
    console.log('run function')
    return 4;
  });

  const [theme, setTheme] = useState(() => 'blue')

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
    setTheme('red')
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    setTheme('pink')
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App;
