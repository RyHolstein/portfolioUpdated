import React from 'react'

import './Finder.scss';

const Finder = (props) => {


    return (
        <div className='finder-window finder'>
            <div className='finder__topbar'>
                 <div className='button-row'>
                    <div className='finder-button red btn'></div>
                    <div className='finder-button yellow btn'></div>
                    <div className='finder-button green btn'></div>
                 </div>

                 <div className='finder__title'>
                        <p>{props.title}</p>
                 </div>
            </div>
            <div className='finder__content'>
                {props.children}
            </div>
        </div>
    )
}


export default Finder;