import React from 'react'


import memoji from '../../../../Assets/Memojis/memoji-1.png';


import './HomeSidebar.scss';
const HomeSidebar = props => {



    return (
        <div className='home__sidebar'>
            <div className='user'>
                <div className='memoji__icon'>
                    <img src={memoji} alt='' />
                </div>
                <p className='user__name'>Ryan Holstein</p>
                <p className='user__email'>me@ryanholste.in</p>
            </div>
        </div>
    )
}


export default HomeSidebar;