import React, { Component } from 'react';


class ManagerMembershipView extends Component {
  render() {
    const {membership, accessMembership} = this.props;
    return (
      <tr>
        <td>{membership.number}회</td>
        <td>{membership.period}일</td>
        <td>{membership.price}원</td>
        <td>{membership.type}인</td>
        <td>{membership.status === 1 ? "활성" :
        membership.status === 2 ? "비활성" : "" }</td>
        <td>{membership.status === 1 ? <button onClick={() => accessMembership(membership.membership_id, membership.status)}>비활성</button> :
        membership.status === 2 ?  <button onClick={() => accessMembership(membership.membership_id, membership.status)}>활성</button> : ""}
        </td>
      </tr>
    );
  }
}

export default ManagerMembershipView;