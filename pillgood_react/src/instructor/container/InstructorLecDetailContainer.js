import React, { Component } from 'react';
import {observer} from 'mobx-react';
import InstructorStore from '../store/InstructorStore';
import InstructorLecDetailView from '../component/InstructorLecDetailView';



class LecContainer extends Component {
  instructorStore = InstructorStore;

  componentDidMount() {
    const {id} = this.props;
    this.instructorStore.selectLec(id); //mount 되면 전체 강의
}
  render() {
    const {lec} = this.instructorStore;
    console.log(lec)


  // });
    return (
       <div>
         <h1>강의 상세</h1>
    <InstructorLecDetailView lec= {lec} />
       </div>
    );
  }
}

export default observer(LecContainer);



