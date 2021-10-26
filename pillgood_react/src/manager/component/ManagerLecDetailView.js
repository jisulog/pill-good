import React, { Component } from 'react';
import moment from 'moment';
import "moment/locale/ko"
import {S3_BUCKET, REGION} from '../../image/S3bucket';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class ManagerLecDetailView extends Component {
  render() {
    const {lec, accessLec} = this.props;
    const userImg = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${lec.email.image}`;
    const lecImg = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${lec.lec_image}`;
    return (
      // <div>
      //   강의 명: {lec.title}<br/>
      //   강사 명: {lec.email?.name}({lec.email?.email})<br/>
      //   강의 날짜: {moment(lec.date).format("YY.MM.DD")}<br/>
      //   강의 시간: {moment(lec.time,"HH:mm:ss").format("HH:mm")}<br/>
      //   강의 장소: {lec.room}<br/>
      //   강의 인원: {lec.number ===  1 ? "1인" : lec.number === 2 ? "2인" : "8인"}<br/>
      //   강의 난이도: {lec.level === 1 ? "level-1" : lec.level === 2 ? "level-2" : "level-3"}<br/>
      //   강의 내용: {lec.content}
      // </div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
        avatar={(<Avatar alt="Ted talk" src={userImg} />)}
        title={lec.email?.name}
        subheader={lec.email?.intro? lec.email?.intro : "자기소개가 없습니다:("}
      />
      <CardActions style={{float: 'right'}}>
      <Button size="small">게시글 수정</Button>
      </CardActions>
      <CardMedia
        component="img"
        height="140"
        image= {lecImg}
        alt="lec image"
      />
      <CardContent style={{textAlign:'center'}}>
      <Typography variant="h5" component="div">
        {lec.title}
      </Typography>
      <br/>
      <hr />
      <br/>
      <Typography variant="body2" gutterBottom>
      일시: {moment(lec.date).format("MM.DD, dddd")}<br/>
      시간: {moment(lec.time,"HH:mm:ss").format('LT')}<br/>
      장소: {lec.room}<br/>
      인원: {lec.number ===  1 ? "1인" : lec.number === 2 ? "2인" : "8인"}<br/>
      단계: {lec.level === 1 ? "level-1" : lec.level === 2 ? "level-2" : "level-3"}
      </Typography>
      <br/>
      <hr/>
      <br/>
      <Typography variant="subtitle1" gutterBottom component="div">
        {lec.content}
      </Typography>
      </CardContent>
      <CardActions style={{float: 'right'}}>
        {lec.status === 2 ? "" : <Button  size="small" onClick={()=>accessLec(lec.lec_id, lec.status, 'access')}>승인</Button >}
        {lec.status === 3 ? "" : <Button  size="small" onClick={()=>accessLec(lec.lec_id, lec.status, 'reject')}>미승인</Button >}
        </CardActions>
    </Card>
    );
  }
}

export default ManagerLecDetailView;