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
                  현재 인원: {lec.lec_count}<br />
                  정원:{lec.number}<br />

                  <Link to = {`/lec/create/book/${lec.lec_id}`}><button>예약 신청</button></Link>
                <Link to= "/lec"><button >강의 목록 </button></Link>&nbsp;&nbsp;


        </div>
    );
  }
}

export default LecDetailView;


