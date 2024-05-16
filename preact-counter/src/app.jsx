import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  const handleInput = (event) => {
    setCount(Number(event.target.value) || 0);
  };

  const handleDblClick = () => {
    setCount(0);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
      <button onClick={() => setCount(count - 1)}>-</button>
        <input type="number" value={count} onInput={handleInput} />
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onDblClick={handleDblClick} title="Double click">
          Reset (double click)
        </button>
        <p>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
