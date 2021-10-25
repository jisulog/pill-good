import React, { Component } from 'react';
import {observer} from 'mobx-react';
import LecStore from '../store/LecStore';
import LecDetailView from '../component/LecDetailView';



class LecContainer extends Component {
  lecStore = LecStore;
  
  componentDidMount() {
    const {id} = this.props;
    this.lecStore.selectLec(id); //mount 되면 전체 강의
    }


  render() {
    const {lec} = this.lecStore;
    

    return (
       <div>

        <LecDetailView lec= {lec} />
       </div>
    );
  }
}

export default observer(LecContainer);



