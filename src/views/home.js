import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>District Research Architect</title>
        <meta property="og:title" content="District Research Architect" />
      </Helmet>
    </div>
  )
}

export default Home
