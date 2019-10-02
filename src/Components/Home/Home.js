import React, { Component } from 'react'



import './Home.scss';
import Caution from '../UI/Caution/Caution';
import ExternalLinks from './ExternalLinks/ExternalLinks';
import MainGraphic from './MainGraphic/MainGraphic';
import Navigation from '../Navigation/Navigation';


class Home extends Component {



    render () {

        return (
            <div className={`home-header`}>
                <section className='section--main'>
                    <ExternalLinks />
                    <MainGraphic />
                </section>

                <section className='section--secondary'>
                    <Navigation />
                </section>
        
            </div>
        )
    }
}


export default Home;