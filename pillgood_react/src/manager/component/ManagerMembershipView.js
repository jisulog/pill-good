import React, { Component } from 'react';

class ManagerMembershipView extends Component {
  render() {
    const {membership} = this.props;
    return (
      <div>
        {membership.number}<br/>
        {membership.period}<br/>
        {membership.price}<br/>
        {membership.type}<br/>
        {membership.status}<br/>
      </div>
    );
  }
}

export default ManagerMembershipView;