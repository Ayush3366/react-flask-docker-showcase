import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="page">
      <header className="hero">
        <div className="badge">React + Flask + Docker</div>
        <h1>Interactive Dockerized SPA</h1>
        <p className="subtitle">
          Built with Vite (React), served by Flask (Python) in a container.
        </p>
      </header>

      <section className="grid">
        <article className="card">
          <h2>Live Clock</h2>
          <p>It’s now:</p>
          <div className="clock">{time}</div>
        </article>

        <article className="card">
          <h2>Counter</h2>
          <p>Click the button to prove it’s interactive even from a static build.</p>
          <button onClick={() => setCount((c) => c + 1)} className="btn">
            Clicks: {count}
          </button>
        </article>

        <article className="card">
          <h2>About</h2>
          <ul className="list">
            <li>React compiled to static assets</li>
            <li>Flask serves them with SPA fallback</li>
            <li>Docker runs the same everywhere</li>
          </ul>
        </article>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} React · Flask · Docker</span>
        <span>Vite · Python · Containerized</span>
      </footer>
    </main>
  );
}
