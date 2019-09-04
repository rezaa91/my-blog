import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Provider } from "react-redux";

import store from "../store";
import Nav from "./nav/nav";
import LoginForm from "./form/loginForm";
import "./layout.css"

const Layout = ({ children }) => {
  const [loginIsOpen, openLogin] = React.useState(false);
  const [scroll, hasScrolled] = React.useState(false);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    function checkIfScrolled() {
      if (window.scrollY > 150) {
        hasScrolled(true);
      } else {
        hasScrolled(false);
      }
    }

    document.addEventListener('scroll', checkIfScrolled)

    // clean up
    return () => document.removeEventListener('scroll', checkIfScrolled);
  })

  const openLoginModal = () => {
    openLogin(true);
  }

  const closeLoginModal = () => {
    openLogin(false);
  }

  return (
    <Provider store={store}>
      <Nav siteTitle={data.site.siteMetadata.title} openLoginModal={openLoginModal} hasScrolled={scroll} />
      <LoginForm loginIsOpen={loginIsOpen} closeModal={closeLoginModal} />
      <div>
        <main
          style={{
            padding: "0 10px"
          }}
        >
          {children}
        </main>
        <footer
          style={{
            textAlign: "center",
            padding: "20px 0",
          }}
        >
          © {new Date().getFullYear()} {data.site.siteMetadata.title}. All rights reserved.
        </footer>
      </div>
    </Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
