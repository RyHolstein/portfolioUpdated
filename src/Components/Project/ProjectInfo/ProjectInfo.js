import React from 'react'

import './ProjectInfo.scss';


const ProjectInfo = props => {



    return (
        <section className='project__info'>

        
            <div className='project-info__row'>
                <div className='project-info__role'>
                    <p className='role__title'>Role</p>
                    <p className='role__info'>{props.role}</p>
                </div>


                {
                    props.site 
                    ?
                    <a href={props.site} target='_blank'>
                        <div className='project-info__site btn'>
                            <i class="fas fa-desktop"></i>
                            <p>Visit Site</p>
                        </div>
                    </a>

                    :
                    <div className='project-info__site'>
                            <i class="fas fa-ban"></i>
                            <p>Site Not Live</p>
                    </div>
                }
            </div>
            <p>{props.description}</p>
        
        </section>
    )
}

export default ProjectInfo