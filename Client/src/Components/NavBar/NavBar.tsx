import React from 'react';
import {Link} from "react-router-dom"
import style from "./NavBar.module.css"

//This is the Navigation Bar component, which contains 2 routes, 'stats' and 'line up'
const NavBar: React.FC = () => {
    return (
       <div className={style.navbar}>
        <Link to="/stats" > STATS </Link>
        <Link to="/lineup" > LINEUP </Link>
       </div> 
    )
};

export default NavBar;