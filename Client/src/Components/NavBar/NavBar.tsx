import React from 'react';
import {Link} from "react-router-dom"

//This is the Navigation Bar component, which contains 2 routes, 'stats' and 'line up'
const NavBar: React.FC = () => {
    return (
       <div>
        <Link to="/stats" > Stats</Link>
        <Link to="/lineup" > Line Up</Link>
       </div> 
    )
};

export default NavBar;