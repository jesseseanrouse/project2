import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Balance from "../components/balance"

const balance = () => (
  <Layout>
    <SEO title="balance" />
    <Balance />
  </Layout>
)

export default balance
