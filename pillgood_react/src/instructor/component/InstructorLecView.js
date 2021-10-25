import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {S3_BUCKET, REGION} from '../../image/S3bucket';


class InstructorLecView extends Component {
  render() {
    const {lec}  = this.props;

    const imgUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${lec.lec_image}`;
      return(
        <div>
            <div>
                <img src={imgUrl} alt="강의 사진" width="200"/>
            </div>
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