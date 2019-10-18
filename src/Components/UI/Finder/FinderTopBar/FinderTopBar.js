import React from 'react'



const FinderTopBar = props => {
    return (
        <div className='finder__topbar'>
            <div className='button-row'>
                <div className='finder-button red btn' onClick={props.close}></div>
                <div className='finder-button yellow'></div>
                <div className='finder-button green'></div>
            </div>

            <div className='finder__title'>
                    <p>{props.title}</p> 
            </div>
        </div>
    )
}

export default FinderTopBar;