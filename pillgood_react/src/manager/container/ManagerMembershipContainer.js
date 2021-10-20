import React, { Component } from 'react';
import { observer } from 'mobx-react'
import ManagerStore from '../store/ManagerStore';
import ManagerMembershipView from '../component/ManagerMembershipView';
import { Link } from 'react-router-dom';

class ManagerMembershipContainer extends Component {
  managerStore = ManagerStore;

  componentDidMount() {
    this.managerStore.selectMembershipAll();
  }
  
  render() {
    const { memberships, accessMembership } = this.managerStore;
    const membershipList = memberships && memberships.map((membership) => {
      return (
        <span key={membership.membership_id}><ManagerMembershipView key={membership.membership_id} membership={membership} />
        {membership.status === 1 ? <button onClick={()=>accessMembership(membership.membership_id, membership.status)}>비활성</button>: 
                membership.status === 2 ? <button onClick={()=>accessMembership(membership.membership_id, membership.status)}>활성</button> :
                '변경불가'}</span>
      )
    });
    return (
      <div>
        {membershipList ? membershipList : "생성된 멤버쉽이 없습니다 :("}<br/>
        <Link to="/manager/membership/create/"><button>생성</button></Link> 
      </div>
    );
  }
}

export default observer(ManagerMembershipContainer);