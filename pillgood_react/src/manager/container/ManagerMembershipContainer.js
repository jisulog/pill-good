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
    const columns = [
      { field: 'number', headerName: '횟수', width: 120 },
      { field: 'period', headerName: '기간', width: 200 },
      { field: 'price', headerName: '가격', width: 200 },
      { field: 'type', headerName: '인원', width: 120 },
      { field: 'status', headerName: '상태', width: 120 },
      {
        field: "change", headerName: '변경', width: 200,
        renderCell: (cellValues) => {
          return (
            <button onClick={() => accessMembership(cellValues.row.membership_id,cellValues.row.status)}>
              변경
            </button>
          );
        }
      }
    ];
    const { memberships, membershipFilter, accessMembership, changeMembershipFilter } = this.managerStore;
    const rows = [];
    // const membershipList = memberships && memberships.map((membership) => {
    //   return (
    //     <span key={membership.membership_id}><ManagerMembershipView key={membership.membership_id} membership={membership} />
    //     {membership.status === 1 ? <button onClick={()=>accessMembership(membership.membership_id, membership.status)}>비활성</button>: 
    //             membership.status === 2 ? <button onClick={()=>accessMembership(membership.membership_id, membership.status)}>활성</button> :
    //             '변경불가'}</span>
    //   )
    // });
    // memberships.forEach((membership) => {
    //   if (membershipFilter === '1') {
    //     if (membership.status === 2) return;
    //     rows.push(
    //       <ManagerMembershipView key={membership.id} membership={membership} accessMembership={accessMembership} />
    //     )
    //   }
    //   else if (membershipFilter === '2') {
    //     if (membership.status === 1) return;
    //     rows.push(
    //       <ManagerMembershipView key={membership.id} membership={membership} accessMembership={accessMembership} />
    //     )
    //   }
    //   else {
    //     rows.push(
    //       <ManagerMembershipView key={membership.id} membership={membership} accessMembership={accessMembership} />
    //     )
    //   }
    memberships.forEach((membership) => {
      if (membershipFilter === '1') {
        if (membership.status === 2) return;
        rows.push(
          { id: membership.membership_id, number: membership.number, period:membership.period, price:membership.price, type:membership.type, status:membership.status }
        )
      }
      else if (membershipFilter === '2') {
        if (membership.status === 1) return;
        rows.push(
          { id: membership.membership_id, number: membership.number, period:membership.period, price:membership.price, type:membership.type, status:membership.status }
        )
      }
      else {
        rows.push(
          { id: membership.membership_id, number: membership.number, period:membership.period, price:membership.price, type:membership.type, status:membership.status }
        )
      }


    });
    return (
      <div>
        <h1>멤버쉽 목록</h1>
          <select name="status" id="status" value={membershipFilter}
            onChange={(e) => changeMembershipFilter(e.target.value)}>
            <option value="0">--활성 여부--</option>
            <option value="1">활성</option>
            <option value="2">비활성</option>
          </select><br />
          <ManagerMembershipView columns = {columns} rows = {rows} />
        {/* <table>
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
        </table> */}

      </div>
    );
  }
}

export default observer(ManagerMembershipContainer);