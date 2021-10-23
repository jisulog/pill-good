import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//lec은 강의 정보를 담은 배열(books와 같음), for each로 돌아가면서 강의 정보하나하나를 element로 받아서 출력.  
class InstructorLecView extends Component {
  render() {
    const {lec}  = this.props;
  
      return(
        <div>
          <p>
            <span> ========================</span><br />

            강의명 : {lec.title}<br />

            장소: {lec.room}<br />
            날짜: {lec.date}<br />
            시간: {lec.time}<br />

              <Link to= {`/instructor/user/${lec.lec_id}`}><button >신청 회원 목록 </button></Link>&nbsp;&nbsp;

            <br />
           </p>
        </div>

    );
  }
}

export default InstructorLecView;