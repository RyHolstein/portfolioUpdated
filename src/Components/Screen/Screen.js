import React, { Component } from 'react'




import './Screen.scss';
import Finder from '../UI/Finder/Finder';




class Screen extends Component {

    state = {
        openTabs : ['home']
    }


    
    closeWindowHandler = (window) => {
        

    }

    render () {
        return (
            <div className='screen-holder' >

                {
                    
                }
               <Finder></Finder>
              
            </div>
        )
    }
}

export default Screen;