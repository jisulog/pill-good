import React, { Component } from 'react';
import { observer } from 'mobx-react'
import ManagerUserDetailView from '../component/ManagerUserDetailView';
import ManagerStore from '../store/ManagerStore';

class ManagerUserDetailContainer extends Component {
  
  managerStore = ManagerStore;

  componentDidMount() {
    const {id} = this.props;
    this.managerStore.selectUser(id);
  }

  render() {
    const {user, handleGoBack} = this.managerStore;
    return (
      <div>
        <ManagerUserDetailView user={user}/>
        <button onClick={()=>handleGoBack()}>뒤로</button>
      </div>
    );
  }
}

export default observer(ManagerUserDetailContainer);