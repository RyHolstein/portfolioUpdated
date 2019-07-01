import React, { Component } from 'react'
import Header from '../../Sides/Header/Header';
import Body from '../../Sides/Body/Body';
import ImageList from '../../../Components/Project/ImageList/ImageList';





class Project extends Component {

    componentDidMount() {
        this.getProject();
    }


    getProject = () => {
       let projectId = this.props.match.params.id;
    }


    render() {

        return (
            <React.Fragment>
                <Header>
                    <p>Project name</p>
                </Header>
                <Body>
                    <ImageList />
                    
                </Body>

            </React.Fragment>
        )
    }
}   

export default Project