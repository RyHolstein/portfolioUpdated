import React from 'react'
import folderIcon from '../../../../Assets/Projects/Icons/folder.png';


import './AppIcon.scss';
const AppIcon = props => {

    return (
        <div className='app-icon btn' onClick={props.click}>
            <div className='app-icon__image'>
                <img src={props.icon ? props.icon : folderIcon} alt='icon'/>
            </div>
            <p className='app-icon__title'>{props.title}</p>
        </div>
    )

}

export default AppIcon;