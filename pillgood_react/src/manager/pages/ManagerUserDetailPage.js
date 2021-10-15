import React, { Component } from 'react';
import ManagerUserDetailContainer from '../container/ManagerUserDetailContainer';

class ManagerUserDetailPage extends Component {
  render() {
    return (
      <div>
        <ManagerUserDetailContainer id={this.props.match.params.id} />
      </div>
    );
  }
}

export default ManagerUserDetailPage;