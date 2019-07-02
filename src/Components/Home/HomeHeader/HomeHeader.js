
import React from 'react'
import './HomeHeader.scss';



const HomeHeader = props => {


    return (
        <div className={`home-header`}>


            <div className='logo'>
                {/* <div className='logo__ball-bar'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                </div> */}
                <div className='logo__grad-bar'></div>
                <p className='logo__name'>Ryan Holstein</p>
                <p className='logo__subtitle'>Web Developer</p>
            </div>
        </div>
    )
}


export default HomeHeader;