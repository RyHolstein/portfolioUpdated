import React from 'react'


import './Home.scss';


const Home = props => {

    return (
        <div className={`home-header`}>
            <div className='logo'>

                <div className='links'>
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

                <div className='logo__grad-bar'></div>
                <p className='logo__name'>Ryan Holstein</p>
                <p className='logo__subtitle'>Web Developer</p>
            </div>
            <div className='caution-sign'>
                <p className='top-row'>caution!</p>
                <p className='bottom-row'>This site is currently under maintenance</p>
            </div>
           
        </div>

        
    )
}

export default Home;