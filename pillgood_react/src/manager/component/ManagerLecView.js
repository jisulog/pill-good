import React, { Component } from 'react';


class ManagerLecView extends Component {
  render() {
    const { lec } = this.props;
    return (
      <div>
        {lec.email?.email}
        {lec.email?.name}
        {lec.title}
        {lec.date}
        {lec.time}
        {lec.room}
        {lec.status === 1 ? "승인대기":
        lec.status === 2 ? "승인":
        lec.status === 3 ? "거절" : ""}
      </div>
    );
  }
}

export default ManagerLecView;