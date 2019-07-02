import React from 'react'

import './ProjectList.scss';


const ProjectList = props => {

    

    return (
        <div className='project-list'>
            <div className='project-list__project' onClick={() => props.goTo('/projects/kritiq')} >Kritiq</div>
            <div className='project-list__project' onClick={() => props.goTo('/projects/iris')} >Iris Digital Communities</div>
            <div className='project-list__project' onClick={() => props.goTo('/projects/cian')} >Cian Moore</div>
            <div className='project-list__project' onClick={() => props.goTo('/projects/love')} >Love Isabella</div>
            <div className='project-list__project' onClick={() => props.goTo('/projects/riddle')} >Riddle Family Foundation</div>
            <div className='project-list__project' onClick={() => props.goTo('/projects/createsafe')} >CreateSafe Beta</div>
        </div>

    )
}


export default ProjectList