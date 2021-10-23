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
    const { lecs, lecFilter, selectLec, changeLecFilter } = this.managerStore;
    const rows = [];
    lecs.forEach((lec)=>{
      if (lecFilter === '1'){
        if (lec.status === 2) return;
        if (lec.status === 3) return;
        rows.push(
            <ManagerLecView key={lec.lec_id} lec={lec} onClick={() => selectLec(lec.lec_id)}/>
        )
      }
      else if (lecFilter === '2'){
        if (lec.status === 1) return;
        if (lec.status === 3) return;
        rows.push(
            <ManagerLecView key={lec.lec_id} lec={lec} onClick={() => selectLec(lec.lec_id)} />
        )
      }
      else if (lecFilter === '3'){
        if (lec.status === 1) return;
        if (lec.status === 2) return;
        rows.push(
            <ManagerLecView key={lec.lec_id} lec={lec} onClick={() => selectLec(lec.lec_id)}/>
        )
      }else{
        rows.push(
            <ManagerLecView key={lec.lec_id} lec={lec} onClick={() => selectLec(lec.lec_id)}/>
        )
      }
    })

    return (
      <div>
        <h1>강의목록</h1>
        <select name="status" id="status" value={lecFilter}
          onChange={(e) => changeLecFilter(e.target.value)}>
          <option value="0">--신청상황--</option>
          <option value="1">대기</option>
          <option value="2">승인</option>
          <option value="3">거부</option>
        </select>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>강사명</th>
              <th>강의명</th>
              <th>날짜</th>
              <th>시간</th>
              <th>장소</th>
              <th>구분</th>
            </tr>
          </thead>
          <tbody>
            {rows.length ? (
              rows)        
            : (
              <tr>
                <td colSpan='7'>강의 목록이 없습니다 :(</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default observer(ManagerLecContainer);