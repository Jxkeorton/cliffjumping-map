import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const showNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavigate = (route: string) => {
    navigate(route);
    showNavbar();
  };

  const navigationItems = [
    { label: 'Home', route: '/home'},
    { label: 'Map', route: '/' },
    { label: 'Profile', route: '/profile', icon: faUser },
    { label: 'Search', route: '/search-locations', icon: faSearch }
  ];

  return (
    <header>
      <h3>
        <Link to="/" className="header-title">
          <h1>UKCJ</h1><h5>ambassadors tool</h5>
        </Link>
      </h3>
      <nav className={isNavOpen ? 'responsive_nav' : ''} ref={navRef}>
        {navigationItems.map((item, index) => (
          <p key={index} onClick={() => handleNavigate(item.route)}>
            {item.icon && <FontAwesomeIcon icon={item.icon} />} {item.label}
          </p>
        ))}
        <button className="nav-btn nav-close-btn" onClick={showNavbar} aria-label="Open Navigation">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar} aria-label="Close Navigation">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
};

export default Header;
