import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function CounterNum({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'scale(1.5)'
    const t = setTimeout(() => {
      el.style.opacity = '1'
      el.style.transform = 'scale(1)'
    }, 150)
    return () => clearTimeout(t)
  }, [value])

  return (
    <span ref={ref} style={{ display: 'inline-block', transition: 'all 0.3s ease', marginLeft: '8px' }}>
      [{value}]
    </span>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="app-container">
        <header className="hero">
          <div className="badge">DISTRICT 7 — LIVE</div>
          <h1 data-text="NOIR">NOIR</h1>
          <p className="subtitle">The city never sleeps.</p>

          <button className="btn" onClick={() => setCount((c) => c + 1)}>
            ENTER_ <CounterNum value={count} />
          </button>

          <div className="menu-wrap">
            <label htmlFor="menu-check" className="menuButton">
              <input id="menu-check" type="checkbox" />
              <span className="top"></span>
              <span className="mid"></span>
              <span className="bot"></span>
            </label>
          </div>

          <div className="logos">
            <img src={heroImg} alt="Hero" className="logo" />
            <img src={reactLogo} alt="React" className="logo" />
            <img src={viteLogo} alt="Vite" className="logo" />
          </div>
        </header>

        <section className="info-box">
          <h2>DOCUMENTATION</h2>
          <ul className="social-links">
            <li><a href="https://vite.dev/" target="_blank" rel="noreferrer">Vite</a></li>
            <li><a href="https://react.dev/" target="_blank" rel="noreferrer">React</a></li>
          </ul>
        </section>

        <section className="info-box">
          <h2>NETWORK</h2>
          <ul className="social-links">
            <li><a href="https://github.com/Ex2-Axon/x-template" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a></li>
            <li><a href="https://discord.gg/8Zeq8VCU" target="_blank" rel="noreferrer">Discord</a></li>
            <li><a href="https://x.com/Microtronic2" target="_blank" rel="noreferrer">X.com</a></li>
            <li><a href="https://bsky.app/profile/microtronic.bsky.social" target="_blank" rel="noreferrer">Bluesky</a></li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Microtronic Co., Ltd. All rights reserved. Credit By Axon.</p>
        <p><a href="https://microtronic-thailand.github.io/privacy-policy/?lang=en" target="_blank" rel="noreferrer">Privacy Policy</a></p>
      </footer>
    </>
  )
}

export default App
