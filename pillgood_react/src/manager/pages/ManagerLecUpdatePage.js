import React, { Component } from 'react';
import ManagerLecUpdateContainer from '../container/ManagerLecUpdateContainer';

class ManagerLecUpdatePage extends Component {
  render() {
    return (
      <div>
        <ManagerLecUpdateContainer id={this.props.match.params.id}/>
      </div>
    );
  }
}

export default ManagerLecUpdatePage;