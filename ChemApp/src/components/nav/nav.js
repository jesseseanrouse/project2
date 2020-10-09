import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
// font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Nav = () => {
    return (
      <nav>
        <Link to="/">ChemApp</Link>
        <Link to="/balance">Balance Equations</Link>
        <div><FontAwesomeIcon icon={faBars} size='2x' /></div>
      </nav>
    )}

export default Nav