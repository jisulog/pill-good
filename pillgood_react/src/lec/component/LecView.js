import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {S3_BUCKET, REGION} from '../../image/S3bucket';
import ImageList from '@mui/material/ImageList';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


//lec은 강의 정보를 담은 배열(books와 같음), for each로 돌아가면서 강의 정보하나하나를 element로 받아서 출력.
class LecView extends Component {


  render() {
    const {lec}  = this.props;

     const imgUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${lec.lec_image}`;
      return(

           <Card sx={{ maxWidth: 300 }}>
           <CardActionArea>
           <Link to = {`/lec/${lec.lec_id}`}>
            <CardMedia
          component="img"
          height="250"
          image={imgUrl}
          alt="강의 사진 "
        />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {lec.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            강사 : {lec.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
 );
}}

export default LecView;