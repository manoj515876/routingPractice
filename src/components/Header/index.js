import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-card">
    <li>
      <Link to="/" className="nav-link logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="header-img"
        />
        <p>wave</p>
      </Link>
    </li>
    <div className="link-card">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </li>
    </div>
  </div>
)

export default Header
