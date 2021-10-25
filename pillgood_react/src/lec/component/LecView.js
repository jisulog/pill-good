import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {S3_BUCKET, REGION} from '../../image/S3bucket';
//lec은 강의 정보를 담은 배열(books와 같음), for each로 돌아가면서 강의 정보하나하나를 element로 받아서 출력.
class LecView extends Component {

  render() {
    const {lec}  = this.props;

     const imgUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${lec.lec_image}`;
      return(
        <div>
          <p>

             <img src={imgUrl} alt="강의 사진" width="200"/><br />
            강의명 : {lec.title}<br />

         <Link to = {`/lec/${lec.lec_id}`}><button>상세보기</button></Link>


           </p>
        </div>

    );
  }
}

export default LecView;