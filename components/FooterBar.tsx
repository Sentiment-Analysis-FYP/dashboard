import React from 'react'

const FooterBar = () => {
  return (
    <footer className='text-align text-center text-xl font-bold pt-5'>
         © {new Date().getFullYear()} Sentinel - Terms of use - Privacy Policy. All rights reserved.
    </footer>
  )
}

export default FooterBar