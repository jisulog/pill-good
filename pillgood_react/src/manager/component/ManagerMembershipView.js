import React, { Component } from 'react';


class ManagerMembershipView extends Component {
  render() {
    const {membership} = this.props;
    return (
      <div>
        횟수: {membership.number} / 
        기간: {membership.period} /
        가격: {membership.price} /
        유형: {membership.type} /
        상태: {membership.status === 1 ? "활성" :
        membership.status === 2 ? "비활성": ""}
      </div>
    );
  }
}

export default ManagerMembershipView;