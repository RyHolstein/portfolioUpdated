import React from 'react'

import './ProjectStoreSidebar.scss';
import WindowButtons from '../../UI/Buttons/Buttons/WindowButtons/WindowButtons';
const ProjectSidebar = props => {




    return (
        <div className='project-store__sidebar sidebar'>
            <div className='button-row'>
                <WindowButtons />
                <div className='search'>
                     
                </div>
            </div>
        </div>
    )
}

export default ProjectSidebar;