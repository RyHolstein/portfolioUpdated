import React, { Component } from 'react'




import './Screen.scss';
import Finder from '../UI/Finder/Finder';




class Screen extends Component {




    render () {
        return (
            <div className='screen-holder' >
               <Finder title='sample'></Finder>
              
            </div>
        )
    }
}

export default Screen;