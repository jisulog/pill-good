import React, { Component } from 'react';
import ManagerLecView from '../component/ManagerLecView';
import { observer } from 'mobx-react'
import ManagerStore from '../store/ManagerStore';


class ManagerLecContainer extends Component {
  managerStore = ManagerStore;

  componentDidMount() {
    this.managerStore.selectLecAll();
  }

  render() {
    const { lecs} = this.managerStore;
    const lecList = lecs && lecs.map((lec) => {
      return (
        <ManagerLecView key={lec.lec_id} lec={lec} />
      )
    });
    return (
      <div>
        {lecList}
      </div>
    );
  }
}

export default observer(ManagerLecContainer);