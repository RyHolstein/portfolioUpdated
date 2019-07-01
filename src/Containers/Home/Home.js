import React from 'react'
import Header from '../Sides/Header/Header';
import Body from '../Sides/Body/Body';
import Navigation from '../Navigation/Navigation';
import HomeHeader from '../../Components/Home/HomeHeader/HomeHeader';


const Home = props => {



    return (
        <React.Fragment> 
            <Header>
                <HomeHeader />
            </Header>

            <Body>
                <Navigation />
            </Body>

        </React.Fragment>

        
    )
}

export default Home;