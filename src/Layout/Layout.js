import React from 'react'
import {Route, withRouter} from 'react-router-dom';
import './Layout.scss';
import Home from '../Components/Home/Home';
import Projects from '../Components/Projects/Projects';
// import AboutMe from '../Containers/AboutMe/AboutMe';
// import Contact from '../Containers/Contact/Contact';
import Project from '../Components/Project/Project';

import noiseFilter from '../Assets/Effects/noise.png';
import Screen from '../Components/Screen/Screen';

const Layout = props => {

    const style = {backgroundImage: `url(${noiseFilter})`}
    return (
        <div className='page__layout'>
            <div className='backdrop' style={style}></div>
            <Route path='/' exact component={Home} />
            <Route path='/template' exact component={Screen} />
            <Route path='/projects' exact component={Projects} />
            <Route path='/projects/:id' exact component={Project} />
         
        </div>
    )
}

export default withRouter(Layout);


//<Route path='/about' component={AboutMe} />
//<Route path='/contact' component={Contact} /> 