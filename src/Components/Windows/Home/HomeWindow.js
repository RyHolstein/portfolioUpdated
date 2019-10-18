import React from 'react'


import './HomeWindow.scss';
import HomeSidebar from './Sidebar/HomeSidebar';
const HomeWindow = (props) => {


    return (
        <div className='home'>
            <HomeSidebar />

            <div className='home__content'></div>
        </div>  
    )
}

export default HomeWindow;