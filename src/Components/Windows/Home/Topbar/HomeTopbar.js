import React from 'react'


import memoji from '../../../../Assets/Memojis/memoji-1.png';


import './HomeTopbar.scss';

//THE  SIDEBAR HAS BECOME A TOPBAR 


const HomeTopbar = props => {

    return (
        <div className='home__sidebar'>
            <div className='user'>
                <div className='memoji__icon'>
                    <img src={memoji} alt='' />
                </div>
                <div className='user__info'>
                    <p className='user__name'>Ryan Holstein</p>
                    <p className='user__email'>me@ryanholste.in</p>
                </div>
            </div>
        </div>
    )
}


export default HomeTopbar;