import React, { Component } from 'react';
// import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {S3_BUCKET, REGION} from '../../image/S3bucket';
import moment from 'moment';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PlaceIcon from '@mui/icons-material/Place';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../lec.css";
import { styled } from '@mui/styles';
import BookCreateView from '../component/BookCreateView';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

class LecDetailView extends Component {


    state = {
        open: false
    };

    handleOpen = e => {
        this.setState({open : true});
    };

    handleClose = () => {
        this.setState({open : false});
    };

  render() {
    const {lec, createBook } = this.props;
    const user_id = window.localStorage.getItem("id");

    const MyButton = styled(Button)({
            background: 'linear-gradient(45deg, #F9AF21 20%, #ECDB52 90%)',
            border: 0,
            borderRadius: 10,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            width: '500px',
            color: 'white',
            height: 48,
            padding: '0 30px',
          });
    const userImg = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${lec.email?.image}`;
    const imgUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${lec.lec_image}`;
    return (
          <Card sx={{ maxWidth: 600 }} className="margin-center">
           <CardMedia
                component="img"
                height="450"
                img src={imgUrl}
                alt="강의사진"
              />
           <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              <h3>{lec.title}</h3>
            </Typography>
            <Typography variant="body2" color="text.secondary">
             날짜: {moment(lec.date).format("YY.MM.DD")}  / 시간: {moment(lec.time,"HH:mm:ss").format("HH:mm")} <br />
                  난이도: {lec.level}<br />
                  강사명: {lec.email}<br />
                  인원 : {lec.lec_count} / {lec.number}
                  </Typography>
             </CardContent>
            <Button  variant="contained"  onClick={() => createBook(user_id)}>예약 신청</Button>
            <Link to="/lec"><Button  variant="contained"> 강의 목록</Button> </Link>


        </Card>

    );
  }
}

export default LecDetailView;


