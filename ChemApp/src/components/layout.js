/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Nav from "./nav"
import About from './about'
import Balance from './balance'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  // Finally got this working
  const [eleData, setEleData] = useState({})
  useEffect(() => {
    fetch("https://neelpatel05.pythonanywhere.com/")
      .then(res => res.json())
      .then(data => setEleData(data))
  }, [])
  

  return (
    <>
      <Nav />
      <About />
      <Balance data={eleData}/>
      <div></div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
