import React, { Component } from 'react';


class ManagerLecView extends Component {
  render() {
    const { lec } = this.props;
    // const { selectLec }= this.props;
    return (
      <div>
        {lec.title}
        {lec.status === 1 ? "승인대기":
        lec.status === 2 ? "승인":
        lec.status === 3 ? "거절" : ""}
      </div>
    );
  }
}

export default ManagerLecView;