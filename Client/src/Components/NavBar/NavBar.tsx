import React from 'react';
import {Link} from "react-router-dom"

const NavBar: React.FC = () => {
    return (
       <div>
        <Link to="/stats" > Stats</Link>
        <Link to="/lineup" > Line Up</Link>
       </div> 
    )
};

export default NavBar;