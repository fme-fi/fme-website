import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import FrontPage from './FrontPage'
import './../style/Site.scss';
import Footer from './common/Footer';
import MobileMenuToggle from './common/MobileMenuToggle.js'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>    
        <MobileMenuToggle />
        <FrontPage siteTitle={data.site.siteMetadata.title} />
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
