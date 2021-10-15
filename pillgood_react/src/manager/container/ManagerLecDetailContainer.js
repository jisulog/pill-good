import React, { Component } from 'react';
import { observer } from 'mobx-react'
import ManagerStore from '../store/ManagerStore';
import ManagerLecDetailView from '../component/ManagerLecDetailView';


class ManagerLecDetailContainer extends Component {

  managerStore = ManagerStore;

  componentDidMount() {
    const {id} = this.props;
    this.managerStore.selectLec(id);
  }
  
  render() {
    const {lec} = this.managerStore;
    return (
      <div>
        <ManagerLecDetailView lec={lec}/>
      </div>
    );
  }
}

export default observer(ManagerLecDetailContainer);