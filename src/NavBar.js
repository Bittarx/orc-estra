import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <ul className="NavBar">
             <li><Link to="/">Home</Link></li>
             <li><Link to="/Sobre_mim">Sobre Mim</Link></li>
        </ul>
    )
}
export default NavBar;