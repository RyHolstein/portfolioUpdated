import React from 'react'

import './ImageList.scss';

const ImageList = props => {

    return (
        <div className='project__images'>
            <div className='project__images--list'>
                {
                    props.images.map((image, index) =><img key={index} src={image} alt=''/> )
                }
            </div>
        </div>  
    )
}



export default ImageList;