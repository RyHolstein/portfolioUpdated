import React from 'react'

import './ProjectIcon.scss'
import folderIcon from '../../../../Assets/Projects/Icons/folder.png';
const ProjectIcon = props => {


    return (

        <div className='project-holder__icon btn' onClick={props.click}>
            <div className='project-icon' >
                <div className='project-icon__icon'>
                    {
                        props.icon 
                        ?
                        <img src={props.icon} alt=''/>
                        :
                        <img src={folderIcon} alt=''/>  

                    }
                </div>

                <div className='project-icon__spacer'></div>

                <div className='project-icon__info'>
                    <p className='project-icon__name'>{props.name}</p>
                    <p className='project-icon__site'>This project was created for blank using frontend</p>

                </div>
            </div>
            <div className='backing'></div>
        </div>
    )
}

export default ProjectIcon;