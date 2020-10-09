import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
// font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
// scss
import './style.css'
// import function
import handleClick from './handleClick'

const Nav = () => {
    return (
      <nav>
        <div className="icon" onClick={handleClick}><FontAwesomeIcon icon={faBars} size='3x' /></div> 
        <div id="links">
            <Link to="/"><div>ChemApp</div></Link>
            <Link to="/balance" ><div>Balance Equations</div></Link>
        </div>
      </nav>
    )}

export default Nav