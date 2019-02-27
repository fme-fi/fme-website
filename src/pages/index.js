import React from 'react'
import { Link } from 'gatsby'
import configureStore from './../store/configureStore';
import { Provider } from "react-redux";
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'




const IndexPage = () => (  
  <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`, 'finnorszag', 'finnorszagi magyarok egyesülete']} />            
  </Layout>
)

export default IndexPage
