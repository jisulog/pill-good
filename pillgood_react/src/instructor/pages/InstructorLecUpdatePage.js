import React, { Component } from 'react';
import InstructorLecUpdateContainer from '../container/InstructorLecUpdateContainer';


class InstructorLecUpdatePage extends Component {
    render() {
     const {params} = this.props.match;
     console.log(params)
        return (
            <div>
             <InstructorLecUpdateContainer id={params.id}/>
            </div>
        );
    }
}
    
export default InstructorLecUpdatePage;