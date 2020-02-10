import React from 'react'
import { IoLogoGoogle, IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io'


//input wagner's facebook/linkedin/instagram links
const Footer = () => {
    return(
        <footer> 
            <a href='http://www.google.com' target='_blank' rel="noopener noreferrer">
                <IoLogoGoogle color='lightgray'/>
            </a>
            <a href='http://www.facebook.com' target='_blank' rel="noopener noreferrer">
                <IoLogoFacebook color='lightgray'/>
            </a>
            <a href='http://www.linkedin.com' target='_blank' rel="noopener noreferrer">
                <IoLogoLinkedin color='lightgray'/>
            </a>
            <a href='http://www.twitter.com' target='_blank' rel="noopener noreferrer">
                <IoLogoTwitter color='lightgray'/>
            </a>


        </footer>
    )
}



export default Footer