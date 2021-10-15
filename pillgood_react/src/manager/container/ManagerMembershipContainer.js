import React, { Component } from 'react';
import { observer } from 'mobx-react'
import ManagerStore from '../store/ManagerStore';
import ManagerMembershipView from '../component/ManagerMembershipView';

class ManagerMembershipContainer extends Component {
  managerStore = ManagerStore;

  componentDidMount() {
    this.managerStore.selectMembershipAll();
  }
  
  render() {
    const { memberships } = this.managerStore;
    const membershipList = memberships && memberships.map((membership) => {
      return (
        <ManagerMembershipView key={membership.membership_id} membership={membership} />
      )
    });
    return (
      <div>
        {membershipList}
      </div>
    );
  }
}

export default observer(ManagerMembershipContainer);