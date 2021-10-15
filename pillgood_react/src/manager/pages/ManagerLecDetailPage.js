import React, { Component } from 'react';
import ManagerLecDetailContainer from '../container/ManagerLecDetailContainer';

class ManagerLecDetailPage extends Component {
  render() {
    return (
      <div>
        <ManagerLecDetailContainer id={this.props.match.params.id} />
      </div>
    );
  }
}

export default ManagerLecDetailPage;