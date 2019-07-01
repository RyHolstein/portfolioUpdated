import React from 'react'

import './ProjectList.scss';


const ProjectList = props => {

    

    return (
        <div className='project-list'>
            <div className='project-list__project' onClick={() => props.goTo('/projects/kritiq')}>Kritiq</div>
            <div className='project-list__project'>Iris Digital Communities</div>
            <div className='project-list__project'>Cian Moore</div>
        </div>

    )
}


export default ProjectList