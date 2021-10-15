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
        const { users, selectUser } = this.managerStore;
        const userList = users && users.map((user) => {
            return (
                <span onClick={()=>selectUser(user.id)} key={user.email}> <ManagerUserView key={user.email} user={user} /></span>
            )
        });
        return (
            <div>
               {userList}
            </div>
        );
    }
}

export default observer(ManagerUserContainer);