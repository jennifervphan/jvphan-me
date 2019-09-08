import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import "../components/layout.css"

const IndexPage = () => (
  <Layout>
    <div className="topHalf">
      <p style={{margin:"0", width:"100%"}}>I <i class="fas fa-heart"></i> </p>
    </div>
    <div className="bottomHalf">
      <p style={{margin:"0", width:"100%"}}>Niklas. </p>
    </div>
  </Layout>
)

export default IndexPage
