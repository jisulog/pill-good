import React, { Component } from 'react';
// import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {S3_BUCKET, REGION} from '../../image/S3bucket';
import moment from 'moment';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PlaceIcon from '@mui/icons-material/Place';
class LecDetailView extends Component {
  render() {
    const {lec} = this.props;
    const imgUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${lec.lec_image}`;
    return (
        <div>
                <h2>{lec.title}</h2>
             <img src={imgUrl} alt="강의 사진" width="400"/><br />
             {lec.content}<br />

                날짜: {moment(lec.date).format("YY.MM.DD")}  / 시간: {moment(lec.time,"HH:mm:ss").format("HH:mm")} <br />
                  난이도: {lec.level}<br />
                  강사명: {lec.email}<br />


                  <Link to = {`/lec/create/book/${lec.lec_id}`}><button>예약 신청</button></Link>
                <Link to= "/lec"><button >강의 목록 </button></Link>&nbsp;&nbsp;


        </div>
    );
  }
}

export default LecDetailView;


