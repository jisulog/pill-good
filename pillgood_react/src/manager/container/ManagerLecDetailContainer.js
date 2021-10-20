import React, { Component } from 'react';
import { observer } from 'mobx-react'
import ManagerStore from '../store/ManagerStore';
import ManagerLecDetailView from '../component/ManagerLecDetailView';
import { Link } from 'react-router-dom';

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
        {lec.status === 2 ? "" : <Link to={`/manager/lec/`}><button onClick={()=>accessLec(lec.lec_id, lec.status, 'access')}>승인</button></Link>}
        {lec.status === 3 ? "" : <Link to="/manager/lec/"><button onClick={()=>accessLec(lec.lec_id, lec.status, 'reject')}>미승인</button></Link>}
        <Link to={`/manager/lec/update/${lec.lec_id}`}><button>수정</button></Link>
        <Link to="/manager/lec/"><button>뒤로</button></Link>
      </div>
    );
  }
}

export default observer(ManagerLecDetailContainer);