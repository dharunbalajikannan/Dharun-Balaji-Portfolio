import React from 'react'
import './App.css'

function Navbar() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'AI experiments', href: '#ai', isSpecial: true },
    { label: 'Writing', href: '#writing' },
    { label: 'Resume', href: '#resume', isButton: true },
  ]

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="brand">Dharun Balaji</a>
        <nav className="nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={`nav-link ${item.isButton ? 'resume-btn' : ''}`}>
                  {item.isSpecial && <span className="sparkle">✨</span>}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <main className="main">
      <div className="hero">
        <div className="hero-left">
          <h1 className="hero-statement">
            Turning <span className="italic">ambiguity</span> into clarity, <br />
            guided by users <span className="icon-wrap bg-yellow"><span className="icon">😊</span></span> and grounded <br />
            in business <span className="icon-wrap bg-green"><span className="icon">✓</span></span> outcomes<span className="dot">.</span>
          </h1>
        </div>
        <div className="hero-right">
          <p className="bio">
            Currently, Founding Product Designer at Troo. <br />
            Previously, I designed at toby and Sourcegraph. <br />
            I have a master's in CS-Human Computer Interaction from Georgia Tech.
          </p>
        </div>
      </div>
    </main>
  )
}

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
