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
    const {lec, accessLec} = this.managerStore;
    return (
      <div>
        <ManagerLecDetailView lec={lec}/>
        {lec.status === 2 ? "" : <button onClick={()=>accessLec(lec.lec_id, lec.status, 'access')}>승인</button>}
        {lec.status === 3 ? "" : <button onClick={()=>accessLec(lec.lec_id, lec.status, 'reject')}>미승인</button>}
        <button>수정</button>
      </div>
    );
  }
}

export default observer(ManagerLecDetailContainer);