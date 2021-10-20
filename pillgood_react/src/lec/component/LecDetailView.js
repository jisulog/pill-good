import React, { Component } from 'react';
// import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';




class LecDetailView extends Component {
  render() {
    const {lec} = this.props;

    return (
      <div>
      강의명 : {lec.title}<br />
      강의 내용 : {lec.content}<br />
      장소: {lec.room}<br />
      날짜: {lec.date}<br />
      시간: {lec.time}<br />
      난이도: {lec.level}<br />
      강사명:{lec.email}<br />
      인원:{lec.number}<br />  
       <Link to = {`/lec/book/${lec.lec_id}`}><button>날짜 선택</button></Link>
        <Link to= "/lec"><button >강의 목록 </button></Link>&nbsp;&nbsp;


        </div>
    );
  }
}

export default LecDetailView;

