import React from 'react'


const FooterComp = ({title}) => (

  <footer>
    <h4>© <span className='small'>
      {new Date().getFullYear()}</span> {title}
    </h4>
  </footer>

)

export default FooterComp
