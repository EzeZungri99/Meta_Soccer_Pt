import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom"
import style from "./NavBar.module.css"

const NavBar: React.FC = () => {
  const location = useLocation();
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={style.navbar}>
      <Link to="/stats" className={location.pathname === '/stats' ? style.active : ""}> STATS </Link>
      <Link to="/lineup" className={location.pathname === '/lineup' ? style.active : ''}> LINEUP </Link>

      {isWideScreen && <Link to="/zone" className={location.pathname === '/zone' ? style.active : ''}> ZONE </Link>}
    </div>
  )
};

export default NavBar;
