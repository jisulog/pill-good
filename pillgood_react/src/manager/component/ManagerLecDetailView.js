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
        강의 인원: {lec.number}<br/>
        강의 난이도: {lec.level}<br/>
        강의 내용: {lec.content}
      </div>
    );
  }
}

export default ManagerLecDetailView;