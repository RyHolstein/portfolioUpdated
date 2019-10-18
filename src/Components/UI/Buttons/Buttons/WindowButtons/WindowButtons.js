import React from 'react'


import './WindowButtons.scss';
const WindowButtons = (props) => {


    return (
        <div className="window-buttons">
            <div className='finder-button red btn' onClick={props.close}></div>
            <div className='finder-button yellow'></div>
            <div className='finder-button green'></div>
        </div>
    )
}

export default WindowButtons