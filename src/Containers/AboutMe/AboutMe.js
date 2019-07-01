import React, { Component } from 'react'
import Header from '../Sides/Header/Header';
import Body from '../Sides/Body/Body';
import About from '../../Components/About/About';




class AboutMe extends Component {




    render () {
        return (
            <React.Fragment> 
                <Header>


                </Header>
                <Body>

                    <About />
                </Body>

            </React.Fragment>

        )
    }
}

export default AboutMe;