import React, { Component } from 'react';

class ManagerLecDetailView extends Component {
  render() {
    const {lec} = this.props;
    return (
      <div>
        {lec.title}<br/>
        {lec.date}<br/>
        {lec.time}<br/>
        {lec.level}<br/>
        {lec.number}<br/>
        {lec.status}<br/>
        {lec.content}
      </div>
    );
  }
}

export default ManagerLecDetailView;