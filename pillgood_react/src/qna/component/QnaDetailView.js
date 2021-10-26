import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../qna.css";
class QnaDetailView extends Component {
    render() {
        const {qna, ondelete, admin} = this.props;
        return (
            <div>
                <Card sx={{ maxWidth: 1000, maxHeight:2000 }} className="margin-center">
                <CardContent>
                <Typography  gutterBottom component="div">
                제목 : {qna.title}<br />
                </Typography>
                <Typography  gutterBottom component="div">
                작성자 : {qna.question_user.name}<br />
                </Typography>
                <Typography  gutterBottom component="div">
                카테고리 : {qna.category}<br />
                </Typography>
                <Typography  gutterBottom component="div">
                등록일 : {moment(qna.date).format("YYYY-MM-DD")}<br />
                </Typography>
                
                {qna.question}<br />
                
                {qna.answer !== "null" && qna.answer 
                            ? `답변 : ${qna.answer}`
                            :""}
                <br />
                
                </CardContent>
                
                <div className="button-align">
                <Button variant="outlined" ><Link to={{pathname: `/qna/update/${qna.qna_id}`,
                                state: {qna_id: qna.qna_id,},}}>수정</Link></Button>
                <Button variant="outlined" onClick={()=>ondelete()}>삭제</Button>
                <Button variant="outlined"><Link to={`/qna/`}>목록</Link></Button>
                {admin !== true
                            ? <Button variant="outlined"> <Link to={`/qna/answer/${qna.qna_id}`}>답변</Link></Button>:""}
                </div>
                </Card>
               
                
                
            </div>
        );
    }
}

export default QnaDetailView;

