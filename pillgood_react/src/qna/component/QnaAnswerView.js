import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../qna.css";
class QnaAnswerView extends Component {
    render() {
        const {qna, handlerSet, onAnswer, adminId} = this.props;
        return (
            <div>
                <Card sx={{ maxWidth: 1000, maxHeight:2000 }} className="margin-center">
                <CardContent>
                
                <Typography gutterBottom component="div">
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
                </Typography >
                내용 : 
                <p className="groove">
                {qna.question}
                </p>
              
                <br />
                답변 : 
                <textarea className="contents" name="answer" onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
           
                
                </CardContent>
                <div className="button-align">
                <Button variant="contained" onClick={()=>onAnswer(`${adminId}`)} >등록</Button>
                <Button variant="contained"><Link to={`/qna/`}>목록</Link></Button>
                </div>
                </Card>
            </div>
        );
    }
}

export default QnaAnswerView;