import React from 'react'
import WindowButtons from '../../Buttons/Buttons/WindowButtons/WindowButtons'



const FinderTopBar = props => {
    return (
        <div className='finder__topbar'>
           <WindowButtons close={props.close}/>

            <div className='finder__title'>
                    <p>{props.title}</p> 
            </div>
        </div>
    )
}

export default FinderTopBar;