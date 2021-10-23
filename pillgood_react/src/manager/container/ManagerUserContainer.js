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
        const { users, userFilter, selectUser, accessUser, changeUserFilter } = this.managerStore;
        const rows = [];
        users.forEach((user) => {
            if (user.type === 1) return;

            if (userFilter === '2') {
                if (user.type === 3) return;
                if (user.type === 8) return;
                rows.push(
                        <ManagerUserView key={user.email} user={user} onClick={() => selectUser(user.id)} accessUser={accessUser}/>
                );
            }
            else if (userFilter === '3') {
                if (user.type === 2) return;
                if (user.type === 8) return;
                rows.push(
                        <ManagerUserView key={user.email} user={user} onClick={() => selectUser(user.id)} accessUser={accessUser}/>
                );
            }
            else {
                rows.push(
                        <ManagerUserView key={user.email} user={user} onClick={() => selectUser(user.id)} accessUser={accessUser}/>
                );
            }
        });
        return (
            <div>
                <h1>회원목록</h1>
                <form>
                    <select name="type" id="type" value={userFilter}
                        onChange={(e) => changeUserFilter(e.target.value)}>
                        <option value="0">--회원분류--</option>
                        <option value="2">강사</option>
                        <option value="3">회원</option>
                    </select><br />
                </form>

                <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>이름</th>
              <th>구분</th>
              <th></th>
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
        </table>
            </div>
        );
    }
}

export default observer(ManagerUserContainer);