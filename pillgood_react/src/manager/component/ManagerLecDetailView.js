import React, { Component } from 'react';
import moment from 'moment';

class ManagerLecDetailView extends Component {
  render() {
    const {lec} = this.props;
    return (
      <div>
        강의 명: {lec.title}<br/>
        강사 명: {lec.email?.name}({lec.email?.email})<br/>
        강의 날짜: {moment(lec.date).format("YY.MM.DD")}<br/>
        강의 시간: {moment(lec.time,"HH:mm:ss").format("HH:mm")}<br/>
        강의 장소: {lec.room}<br/>
        강의 인원: {lec.number ===  1 ? "1인" : lec.number === 2 ? "2인" : "8인"}<br/>
        강의 난이도: {lec.level === 1 ? "level-1" : lec.level === 2 ? "level-2" : "level-3"}<br/>
        강의 내용: {lec.content}
      </div>
    );
  }
}

export default ManagerLecDetailView;