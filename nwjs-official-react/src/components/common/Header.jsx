import { useState } from "react"
import "./Header.css"

// Import Link and useLocation from react-router-dom
// Link: Enables client-side navigation without full page reloads
// useLocation: Hook that returns current location object (contains pathname, search, hash, etc.)
import { Link, useLocation } from "react-router-dom"

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    {/* isMobileMenuOpen: boolean checking if mobile sidebar is visible
      - true: Sidebar is displayed (user clicked hamburger icon)
      - false: Sidebar is hidden (default state or closed)

      setIsMobileMenuOpen: Function to update the state
      - Call with true to open menu: setIsMobileMenuOpen(true)
      - Call with false to close menu: setIsMobileMenuOpen(false)
      
      Initial value: false (menu starts out closed) */}
    
  const location = useLocation()
    {/* React router hook that gets the current route info and tracks which page user is currently on. 
      Returns location object. URL will update to corresponding route as user navigates pages and re-renders page
      with new location and updates necessary parts to reflect the appropriate path */}

    {/* EVENT HANDLERS FOR SIDEBAR MENU ON MOBILE */}
  const handleOpenMenu = () => {
    setIsMobileMenuOpen(true)
  }
  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false)
  }
  
  {/* my liquid gold, the freaking header/side menu */}
  return (
    <header>
      <nav>
        <ul className={`sidebar ${isMobileMenuOpen ? "open" : ""}`}>
          <li onClick={handleCloseMenu}>
            <a href="#">✕</a> {/* need to restyle to be larger */}
          </li>

          {/* to="/", to="/products", to="/contact", are these props?? - need to review */}
          <li onClick={handleCloseMenu}>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          </li>

          <li onClick={handleCloseMenu}>
            <Link to="/products" className={location.pathname === "/products" ? "active" : ""}>Products</Link>
          </li>

          <li onClick={handleCloseMenu}>
            <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
          </li>
        </ul>

        <ul>
          <li className="hideOnMobile">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          </li>

          <li className="hideOnMobile">
            <Link to="/products" className={location.pathname === "/products" ? "active" : ""}>Products</Link>
          </li>

          <li className="hideOnMobile">
            <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
          </li>

          <li className="hamburgerMenu" onClick={handleOpenMenu}>
            <a href="#">☰</a> {/* need to restyle */}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
