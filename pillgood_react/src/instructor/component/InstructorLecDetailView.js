import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InstructorLecDetailView extends Component {
  render() {
    const {lec} = this.props;

    return (
      <div>
      강좌명 : {lec.title}<br />
      강좌 내용 : {lec.content}<br />
      장소: {lec.room}<br />
      날짜: {moment(lec.date).format("YY.MM.DD")}}
      시간: {moment(lec.time,"HH:mm:ss").format("HH:mm")}<br />
      난이도: {lec.level}<br />
      강사명:{lec.email}<br />
      인원:{lec.number}<br />

    <Link to = {`/instructor/lec/update/${lec.lec_id}`}><button>수정</button></Link>&nbsp;&nbsp;
    <Link to = {`/instructor/lec/`}><button>목록</button></Link>
        </div>
    );
  }
}

export default InstructorLecDetailView;


