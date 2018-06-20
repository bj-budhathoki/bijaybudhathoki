import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="site-wrapper">
    <div className="main">
      <header className="site-header">
        <div className="site-logo">
          <img src="./logo-1.png" alt="my logo" />
        </div>
        <nav className="site-menu">
          <ul>
            <li>
              <Link to="/">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li>
              <Link to="/">PROJECTS</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="intro-section">
        <h1 className="title">BIJAY KR. BUDHATHOKI</h1>
        <p>
          I am a web designer and developer from kathmandu city.I enjoy building
          everytihing from samll business sites to rich interactive web apps.
        </p>
        <button className="hire-me-btn">
          <Link
            to="/contact"
            style={{ textDecoretion: 'none', color: 'whitesmoke' }}
          >
            i'm looking to hire !
          </Link>
        </button>
      </section>
    </div>
  </div>
)

export default IndexPage
