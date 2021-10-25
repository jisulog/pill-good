import React, { Component } from 'react';
import ManagerStore from '../store/ManagerStore';
import { observer } from 'mobx-react'
import ManagerUserView from '../component/ManagerUserView'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { makeStyles } from "@mui/styles";


class ManagerUserContainer extends Component {
  managerStore = ManagerStore;
  componentDidMount() {
    this.managerStore.selectUserAll();
  }

  render() {
    const useStyles = makeStyles({
      root: {
        "& .super-app-theme--header": {
          backgroundColor: '#e6cda9'
        }
      }
    });
    const columns = [
      { field: 'email', headerName: 'Email', headerClassName: 'super-app-theme--header', width: 200 },
      { field: 'name', headerName: '이름', headerClassName: 'super-app-theme--header', width: 150 },
      { field: 'type', headerName: '분류', headerClassName: 'super-app-theme--header', width: 150 },
      {
        field: "change", headerName: '변경', headerClassName: 'super-app-theme--header', width: 150,
        renderCell: (cellValues) => {
          return (
            <button
              onClick={(event) => { accessUser(cellValues.row.id, cellValues.row.type); }}>변경
            </button>
          );
        }
      }
    ];

    const { users, userFilter, selectUser, accessUser, changeUserFilter } = this.managerStore;
    const rows = [];
    // users.forEach((user) => {
    //     if (user.type === 1) return;

    //     if (userFilter === '2') {
    //         if (user.type === 3) return;
    //         if (user.type === 8) return;
    //         rows.push(
    //                 <ManagerUserView key={user.email} user={user} columns = {columns} onClick={() => selectUser(user.id)} accessUser={accessUser}/>
    //         );
    //     }
    //     else if (userFilter === '3') {
    //         if (user.type === 2) return;
    //         if (user.type === 8) return;
    //         rows.push(
    //                 <ManagerUserView key={user.email} user={user} columns = {columns} onClick={() => selectUser(user.id)} accessUser={accessUser}/>
    //         );
    //     }
    //     else {
    //         rows.push(
    //                 <ManagerUserView key={user.email} user={user} columns = {columns} onClick={() => selectUser(user.id)} accessUser={accessUser}/>
    //         );
    //     }
    // });
    users.forEach((user) => {
      if (user.type === 1) return;

      if (userFilter === '2') {
        if (user.type === 3) return;
        if (user.type === 8) return;
        rows.push(
          { id: user.id, email: user.email, name: user.name, type: user.type }
        );
      }
      else if (userFilter === '3') {
        if (user.type === 2) return;
        if (user.type === 8) return;
        rows.push(
          { id: user.id, email: user.email, name: user.name, type: user.type }
        );
      }
      else {
        rows.push(
          { id: user.id, email: user.email, name: user.name, type: user.type }
        );
      }
    });
    return (
      <div style={{width: '50%', margin: '30px auto'}}>
        <h2 style={{textAlign:'center', color:'#574934'}} >회원목록</h2>
        {/* <select name="type" id="type" value={userFilter}
                        onChange={(e) => changeUserFilter(e.target.value)}>
                        <option value="0">--회원분류--</option>
                        <option value="2">강사</option>
                        <option value="3">일반</option>
                    </select><br /> */}
        <Box sx={{ minWidth: 120 }}>
          <FormControl >
            <NativeSelect
              defaultValue={0}
              onChange={(e) => changeUserFilter(e.target.value)}
              inputProps={{
                name: 'type',
                id: 'type',
              }}
            >
              <option value={0}>전체</option>
              <option value={2}>강사</option>
              <option value={3}>일반</option>
            </NativeSelect>
          </FormControl>
        </Box>
        {<ManagerUserView columns={columns} rows={rows} useStyles={useStyles} />}
        {/* <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>이름</th>
              <th>구분</th>
              <th>변경</th>
            </tr>
          </thead>
          <tbody>
            {rows.length ? (
              rows)        
            : (
              <tr>
                <td colSpan='3'>회원 목록이 없습니다 :(</td>
              </tr>
            )}
          </tbody>
        </table> */}
      </div>
    );
  }
}

export default observer(ManagerUserContainer);