import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container">
      <header>
        <h1>🐳 Docker Workshop</h1>
        <p className="subtitle">Live Reload Enabled with Vite + React + Docker</p>
      </header>

      <section className="status">
        <span className="status-pill">🔥 Change me</span>
      </section>

      <section className="card">
        <h2>Interactive Demo</h2>
        <p>Click the button to test React state updates.</p>
        <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
      </section>

      <section className="info">
        <h3>What this setup includes:</h3>
        <ul>
          <li>✅ Vite + React</li>
          <li>✅ Dockerized Dev Environment</li>
          <li>✅ Hot Module Replacement (HMR)</li>
          <li>✅ No Rebuilds Required</li>
        </ul>
      </section>

      <footer>
        <p>Made with 🐳 & ❤️ for Docker demos</p>
      </footer>
    </main>
  );
}

export default App;
