import React from 'react'

import './ExternalLinks.scss';


const ExternalLinks = () => {


    return (
        <div className='links external-links'>
            <a className='links__link first' href='mailto:me@ryanholste.in'>
                <i className="fas fa-envelope"></i>
            </a>
            <a className='links__link second' href='https://www.linkedin.com/in/ryanholstein25/' target="_blank">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a className='links__link third' href='https://twitter.com/Sexy_RyRy' target="_blank">
                <i className="fab fa-twitter"></i>
            </a>
            <a className='links__link fourth' href='https://github.com/Terrymillz' target="_blank">
                <i className="fab fa-github"></i>
            </a>
        
        </div>
    )
}

export default ExternalLinks;