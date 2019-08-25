import React from "react"
import { Link } from "gatsby"

import { grey, tiffany, white } from "../utils/colours";
import Button from "../components/button/button";
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section
      style={{
        padding: "100px 20px 50px",
        width: "40%",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h1 style={{fontWeight: "200", color: tiffany}}>Sorry.</h1>
      <p style={{color: grey, fontSize: "22px"}}>It looks like this page does not exist.</p>
      <Button className="primary">
        <Link to="/" style={{color: white}}>back home</Link>
      </Button>
    </section>
  </Layout>
)

export default NotFoundPage
