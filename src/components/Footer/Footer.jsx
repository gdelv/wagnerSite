import React from 'react'
import { IoLogoGoogle, IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
    return(
        <footer>
            <a href='www.google.com' target='_blank'>
                <IoLogoGoogle/>
            </a>
            <a href='www.facebook.com' target='_blank'>
                <IoLogoFacebook/>
            </a>
            <a href='www.linkedin.com' target='_blank'>
                <IoLogoLinkedin/>
            </a>
            <a href='www.twitter.com' target='_blank'>
                <IoLogoTwitter/>
            </a>


        </footer>
    )
}



export default Footer