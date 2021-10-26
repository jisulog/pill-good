import React, { Component } from 'react';
import ManagerLecView from '../component/ManagerLecView';
import { observer } from 'mobx-react'
import ManagerStore from '../store/ManagerStore';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

class ManagerLecContainer extends Component {
  managerStore = ManagerStore;

  componentDidMount() {
    this.managerStore.selectLecAll();
  }

  render() {
    const columns = [
      { field: 'email', headerName: 'Email', width: 200 },
      { field: 'name', headerName: '강사명', width: 120 },
      { field: 'title', headerName: '강의명', width: 250 },
      { field: 'date', headerName: '날짜', width: 120 },
      { field: 'time', headerName: '시간', width: 120 },
      { field: 'room', headerName: '장소', width: 120 },
      { field: 'access', headerName: '승인여부', width: 150 },
    ];
    const { lecs, lecFilter, selectLec, changeLecFilter } = this.managerStore;
    const rows = [];
    // lecs.forEach((lec)=>{
    //   if (lecFilter === '1'){
    //     if (lec.status === 2) return;
    //     if (lec.status === 3) return;
    //     rows.push(
    //         <ManagerLecView key={lec.lec_id} lec={lec} onClick={() => selectLec(lec.lec_id)}/>
    //     )
    //   }
    //   else if (lecFilter === '2'){
    //     if (lec.status === 1) return;
    //     if (lec.status === 3) return;
    //     rows.push(
    //         <ManagerLecView key={lec.lec_id} lec={lec} onClick={() => selectLec(lec.lec_id)} />
    //     )
    //   }
    //   else if (lecFilter === '3'){
    //     if (lec.status === 1) return;
    //     if (lec.status === 2) return;
    //     rows.push(
    //         <ManagerLecView key={lec.lec_id} lec={lec} onClick={() => selectLec(lec.lec_id)}/>
    //     )
    //   }else{
    //     rows.push(
    //         <ManagerLecView key={lec.lec_id} lec={lec} onClick={() => selectLec(lec.lec_id)}/>
    //     )
    //   }
    // })
    lecs.forEach((lec) => {
      if (lecFilter === '1') {
        if (lec.status === 2) return;
        if (lec.status === 3) return;
        rows.push(
          { id: lec.lec_id, email:lec.email.email, name:lec.email.name, title:lec.title, date:lec.date,
            time: lec.time, room:lec.room, access:(lec.status?"대기":"") }
        );
      }
      else if (lecFilter === '2') {
        if (lec.status === 1) return;
        if (lec.status === 3) return;
        rows.push(
          { id: lec.lec_id, email:lec.email.email, name:lec.email.name, title:lec.title, date:lec.date,
            time:lec.time, room:lec.room, access:(lec.status?"승인":"") }
        );
      }
      else if (lecFilter === '3') {
        if (lec.status === 1) return;
        if (lec.status === 2) return;
        rows.push(
          { id: lec.lec_id, email:lec.email.email, name:lec.email.name, title:lec.title, date:lec.date,
            time:lec.time, room:lec.room, access:(lec.status?"거부":"") }
        );
      }
      else {
        rows.push(
          { id: lec.lec_id, email:lec.email.email, name:lec.email.name, title:lec.title, date:lec.date,
            time:lec.time, room:lec.room, 
            access:(lec.status === 1 ? "대기": lec.status === 2 ? "승인": lec.status === 3 ? "거부" : "")}
        );
      }


    });

    return (
      <div style={{width: '80%', margin: '30px auto'}}>
        <h2 style={{textAlign:'center', color:'#574934'}} >강의목록</h2>
        {/* <select name="status" id="status" value={lecFilter}
          onChange={(e) => changeLecFilter(e.target.value)}>
          <option value="0">--승인여부--</option>
          <option value="1">대기</option>
          <option value="2">승인</option>
          <option value="3">거부</option>
        </select> */}
        <Box sx={{ minWidth: 120 } }>
          <FormControl >
            <NativeSelect
              defaultValue={0}
              onChange={(e) => changeLecFilter(e.target.value)}
              inputProps={{
                name: 'status',
                id: 'status',
              }}
            >
              <option value={0}>전체</option>
              <option value={1}>대기</option>
              <option value={2}>승인</option>
              <option value={3}>거부</option>
            </NativeSelect>
          </FormControl>
        </Box>
        <ManagerLecView columns = {columns} rows = {rows} />
        {/* <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>강사명</th>
              <th>강의명</th>
              <th>날짜</th>
              <th>시간</th>
              <th>장소</th>
              <th>승인여부</th>
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
        </table> */}
      </div>
    );
  }
}

export default observer(ManagerLecContainer);