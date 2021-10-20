import React, { Component } from 'react';
import ManagerLecView from '../component/ManagerLecView';
import { observer } from 'mobx-react'
import ManagerStore from '../store/ManagerStore';
import { Link } from 'react-router-dom';


class ManagerLecContainer extends Component {
  managerStore = ManagerStore;

  componentDidMount() {
    this.managerStore.selectLecAll();
  }

  render() {
    const { lecs, lecFilter, selectLec, changeLecFilter } = this.managerStore;
    const rows = [];
    lecs.forEach((lec)=>{
      if (lecFilter === '1'){
        if (lec.status === 2) return;
        if (lec.status === 3) return;
        rows.push(
          <span onClick={() => selectLec(lec.lec_id)} key={lec.lec_id}>
            <Link to={`/manager/lec/${lec.lec_id}`}><ManagerLecView key={lec.lec_id} lec={lec} /></Link></span>
        )
      }
      else if (lecFilter === '2'){
        if (lec.status === 1) return;
        if (lec.status === 3) return;
        rows.push(
          <span onClick={() => selectLec(lec.lec_id)} key={lec.lec_id}>
            <Link to={`/manager/lec/${lec.lec_id}`}><ManagerLecView key={lec.lec_id} lec={lec} /></Link></span>
        )
      }
      else if (lecFilter === '3'){
        if (lec.status === 1) return;
        if (lec.status === 2) return;
        rows.push(
          <span onClick={() => selectLec(lec.lec_id)} key={lec.lec_id}>
            <Link to={`/manager/lec/${lec.lec_id}`}><ManagerLecView key={lec.lec_id} lec={lec} /></Link></span>
        )
      }else{
        rows.push(
          <span onClick={() => selectLec(lec.lec_id)} key={lec.lec_id}>
            <Link to={`/manager/lec/${lec.lec_id}`}><ManagerLecView key={lec.lec_id} lec={lec} /></Link></span>
        )
      }
    })

    return (
      <div>
        <select name="status" id="status" value={lecFilter}
          onChange={(e) => changeLecFilter(e.target.value)}>
          <option value="0">--신청상황--</option>
          <option value="1">대기</option>
          <option value="2">승인</option>
          <option value="3">거부</option>
        </select><br />
        {rows}
      </div>
    );
  }
}

export default observer(ManagerLecContainer);