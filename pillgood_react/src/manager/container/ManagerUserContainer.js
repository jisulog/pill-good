import React, { Component } from 'react';
import ManagerStore from '../store/ManagerStore';
import { observer } from 'mobx-react'
import ManagerUserView from '../component/ManagerUserView'


class ManagerUserContainer extends Component {
    managerStore = ManagerStore;

    componentDidMount() {
      this.managerStore.selectUserAll();
    }

    render() {
      const columns = [
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'name', headerName: '이름', width: 250 },
        { field: 'type', headerName: '분류', width: 200 },
        {
          field: "change", headerName: '변경', width: 200,
          renderCell: (cellValues) => {
            return (
              <button
                onClick={(event) => {
                  accessUser(cellValues.row.id, cellValues.row.type);
                }}
              >
                변경
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
            <div>
                <h1>회원목록</h1>
                    <select name="type" id="type" value={userFilter}
                        onChange={(e) => changeUserFilter(e.target.value)}>
                        <option value="0">--회원분류--</option>
                        <option value="2">강사</option>
                        <option value="3">일반</option>
                    </select><br />
                {<ManagerUserView columns = {columns} rows = {rows} />}
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