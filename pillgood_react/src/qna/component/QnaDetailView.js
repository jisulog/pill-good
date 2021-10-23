import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
class QnaDetailView extends Component {
    render() {
        const {qna, ondelete, admin} = this.props;
        return (
            <div>
                번호 : {qna.qna_id}<br />
                제목 : {qna.title}<br />
                작성자 : {qna.question_user.name}<br />
                카테고리 : {qna.category}<br />
                등록일 : {moment(qna.date).format("YYYY-MM-DD")}<br />
                {qna.question}<br />
                {qna.answer !== "null" && qna.answer 
                            ? `답변 : ${qna.answer}`
                            :""}
                <br />
                <Link to={`/qna/update/${qna.qna_id}`}>수정</Link>
                <button onClick={()=>ondelete()}>삭제</button>
                <Link to={`/qna/`}>목록</Link>
                {admin !== true
                            ? <Link to={`/qna/answer/${qna.qna_id}`}>답변</Link>:""}
            </div>
        );
    }
}

export default QnaDetailView;

