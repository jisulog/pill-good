import React, { Component } from 'react';
// import { Item } from 'semantic-ui-react';


class LecDetailView extends Component {
  render() {
    const {lec} = this.props;
    
    return (
      <div>
      강좌명 : {lec.title}<br />
      강좌 내용 : {lec.content}<br />
      장소: {lec.room}<br />
      날짜: {lec.date}<br />
      시간: {lec.time}<br />
      난이도: {lec.level}<br />
      강사명:{lec.email}<br />
      인원:{lec.number}<br />  


        </div>
    );
  }
}

export default LecDetailView;


