import React, { Component } from 'react';


class ManagerLecDetailView extends Component {
  render() {
    const {lec} = this.props;
    return (
      <div>
        강의 명: {lec.title}<br/>
        강의 날짜: {lec.date}<br/>
        강의 시간: {lec.time}<br/>
        강의 난이도: {lec.level}<br/>
        강의 인원: {lec.number}<br/>
        강의 상태: {lec.status}<br/>
        강의 내용: {lec.content}
      </div>
    );
  }
}

export default ManagerLecDetailView;