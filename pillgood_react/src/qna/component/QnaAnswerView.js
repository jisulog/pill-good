import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QnaAnswerView extends Component {
    render() {
        const {qna, handlerSet, onupdate} = this.props;
        return (
            <div>
                번호 : {qna.qna_id}<br />
                제목 : {qna.title}<br />
                작성자 : {qna.question_user}<br />
                카테고리 : {qna.category}<br />
                {qna.question}<br />
                
                답변 : <textarea name="answer" onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
                <button onClick={()=>onupdate()} >등록</button>
                <Link to={`/qna/`}>목록</Link>
            </div>
        );
    }
}

export default QnaAnswerView;