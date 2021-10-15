import React, { Component } from 'react';
// import { Item } from 'semantic-ui-react';


class LecDetailView extends Component {
  render() {
    const {lec} = this.props;
    
    return (
      <div>
      강의명 : {lec.title}<br />
      날짜: {lec.date}<br />
      시간: {lec.time}<br />
      강사명:{lec.email}<br />
      인원:{lec.number}<br />  
      <button>예약</button> &nbsp;&nbsp;
        </div>
    );
  }
}

export default LecDetailView;


