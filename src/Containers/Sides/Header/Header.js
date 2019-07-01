

import React from 'react'

import noiseFilter from '../../../Assets/Effects/noise.png';



const Header = props => {

    const style = {backgroundImage: `url(${noiseFilter})`}

    return ( <div className='page__layout--header' style={style}> {props.children}</div>)

    
}
export default Header;

