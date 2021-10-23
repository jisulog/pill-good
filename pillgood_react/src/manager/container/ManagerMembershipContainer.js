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
    const { memberships, membershipFilter, accessMembership, changeMembershipFilter } = this.managerStore;
    // const membershipList = memberships && memberships.map((membership) => {
    //   return (
    //     <span key={membership.membership_id}><ManagerMembershipView key={membership.membership_id} membership={membership} />
    //     {membership.status === 1 ? <button onClick={()=>accessMembership(membership.membership_id, membership.status)}>비활성</button>: 
    //             membership.status === 2 ? <button onClick={()=>accessMembership(membership.membership_id, membership.status)}>활성</button> :
    //             '변경불가'}</span>
    //   )
    // });

    const rows = [];
    memberships.forEach((membership) => {
      if (membershipFilter === '1') {
        if (membership.status === 2) return;
        rows.push(
          <ManagerMembershipView key={membership.id} membership={membership} accessMembership={accessMembership} />
        )
      }
      else if (membershipFilter === '2') {
        if (membership.status === 1) return;
        rows.push(
          <ManagerMembershipView key={membership.id} membership={membership} accessMembership={accessMembership} />
        )
      }
      else {
        rows.push(
          <ManagerMembershipView key={membership.id} membership={membership} accessMembership={accessMembership} />
        )
      }


    });
    return (
      <div>
        <h1>멤버쉽 목록</h1>
        <form>
          <select name="status" id="status" value={membershipFilter}
            onChange={(e) => changeMembershipFilter(e.target.value)}>
            <option value="0">--활성분류--</option>
            <option value="1">비활성</option>
            <option value="2">활성</option>
          </select><br />
        </form>
        <table>
          <thead>
            <tr>
              <th>횟수</th>
              <th>기간</th>
              <th>가격</th>
              <th>인원</th>
              <th>상태</th>
              <th>변경</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.length ? (
              rows)
              : (
                <tr>
                  <td colSpan='6'>멤버쉽 목록이 없습니다 :(</td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default observer(ManagerMembershipContainer);