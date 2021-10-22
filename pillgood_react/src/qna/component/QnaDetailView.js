import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QnaDetailView extends Component {
    render() {
        const {qna} = this.props;
        return (
            <div>
                번호 : {qna.qna_id}<br />
                제목 : {qna.title}<br />
                작성자 : {qna.question_user.name}<br />
                카테고리 : {qna.category}<br />
                등록일 : {qna.date}<br />
                {qna.question}<br />
                
                <Link to={`/qna/update/${qna.qna_id}`}>수정</Link>
                <Link to={`/qna/delete/${qna.qna_id}`}>삭제</Link>
                <Link to={`/qna/`}>목록</Link>
            </div>
        );
    }
}

export default QnaDetailView;

