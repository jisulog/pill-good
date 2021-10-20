import React, { Component } from 'react';
import ManagerStore from '../store/ManagerStore';
import { observer } from 'mobx-react'
import ManagerUserView from '../component/ManagerUserView'
import { Link } from 'react-router-dom';

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
                    <span onClick={() => selectUser(user.id)} key={user.email}>
                        <Link to={`user/${user.id}`}><ManagerUserView key={user.email} user={user} /></Link>
                        <button onClick={() => accessUser(user.id, user.type)}>일반 회원으로 변경</button> </span>
                );
            }
            else if (userFilter === '3') {
                if (user.type === 2) return;
                if (user.type === 8) return;
                rows.push(
                    <span onClick={() => selectUser(user.id)} key={user.email}>
                        <Link to={`user/${user.id}`}><ManagerUserView key={user.email} user={user} /></Link>
                        <button onClick={() => accessUser(user.id, user.type)}>강사 회원으로 변경</button> </span>
                );
            }
            else {
                rows.push(
                    <span onClick={() => selectUser(user.id)} key={user.email}>
                        <Link to={`user/${user.id}`}><ManagerUserView key={user.email} user={user} /></Link>
                        {user.type === 2 ? <button onClick={() => accessUser(user.id, user.type)}>일반 회원으로 변경</button> :
                            user.type === 3 ? <button onClick={() => accessUser(user.id, user.type)}>강사 회원으로 변경</button> :
                                '변경불가'}</span>
                );
            }
        });

        return (
            <div>
                <form>
                    <select name="type" id="type" value={userFilter}
                        onChange={(e) => changeUserFilter(e.target.value)}>
                        <option value="0">--회원분류--</option>
                        <option value="2">강사</option>
                        <option value="3">회원</option>
                    </select><br />
                </form>
                {rows}
            </div>
        );
    }
}

export default observer(ManagerUserContainer);