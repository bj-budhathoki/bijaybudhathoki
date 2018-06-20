import React from 'react'
import Link from 'gatsby-link'
const Contact = () => (
   <div className="contact">
      <h1>CONTACT</h1>
      <div>
         <p>
            Feel free to contact me through the email below, I'd love to chat.
         </p>
         <p>
            <a herf="">bijayabudhathoki98@gmail.com</a>
         </p>
      </div>
      <div className="social-contact">
         <h1>WHRER TO FIND ME</h1>
         <button className="twitter">
            <a href="https://twitter.com/Bj_budahthoki">Twitter</a>
         </button>
         <button className="linkden">
            <a href="https://www.linkedin.com/in/bijay-budathoki">Linkden</a>
         </button>
         <button className="github">
            <a href="https://github.com/bj-budhathoki">Github</a>
         </button>
      </div>
      <Link
         to="/"
         style={{
            color: 'whitesmoke',
            textDecoration: 'none',
            marginTop: '10px',
         }}
      >
         BACK TO HOME
      </Link>
   </div>
)
export default Contact
