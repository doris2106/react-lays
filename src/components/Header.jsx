import { useContext } from 'react'
import { ThemeContext } from '../App'

export default function Header({ menuItems = ['Home', 'Products', 'Recipes', 'About'] }) {
  const { theme, setTheme } = useContext(ThemeContext)

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">

          {/* LEFT SIDE LOGO */}
          <div className="logo" onClick={() => scrollToSection("top")} style={{ cursor: "pointer" }}>
            <img src="/logo.png" alt="Lay's Logo" />
          </div>

          {/* RIGHT SIDE MENU (driven by props) */}
          <ul className="nav-menu">
            {menuItems.map((item, idx) => {
              const id = item.toLowerCase() === 'home' ? 'top' : item.toLowerCase()
              return (
                <li key={idx} onClick={() => scrollToSection(id)} style={{ cursor: 'pointer' }}>
                  {item}
                </li>
              )
            })}
          </ul>

          {/* THEME TOGGLE */}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

        </div>
      </nav>
    </header>
  );
}
