import React, { Component } from 'react';
import moment from 'moment';

class ManagerLecView extends Component {
  render() {
    const { lec } = this.props;
    return (
      <tr>
        <td>{lec.email.email}</td>
        <td>{lec.email.name}</td>
        <td>{lec.title}</td>
        <td>{moment(lec.date).format("YY.MM.DD")}</td>
        <td>{moment(lec.time,"HH:mm:ss").format("HH:mm")}</td>
        <td>{lec.room}</td>
        <td>
        {lec.status === 1 ? "대기":
        lec.status === 2 ? "승인":
        lec.status === 3 ? "거부" : ""}
        </td>
      </tr>
    );
  }
}

export default ManagerLecView;