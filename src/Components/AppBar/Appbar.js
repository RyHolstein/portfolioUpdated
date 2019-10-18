
import React from 'react';

import noise from '../../Assets/Effects/noise.png';
import './Appbar.scss';



const AppBar = props => {

    const blurStyles = {backgroundImage: `url(${noise})`}

    return (
        <div className='app-bar'>
            <div className='glass-blur' style={blurStyles}></div>
            <button onClick={() => props.openTab('home')}>Finder open</button>
        </div>
    )
}

export default AppBar;