import React, { Component } from 'react';

class QnaDetailView extends Component {
    render() {
        const {qna} = this.props;
        return (
            <div>
                번호 : {qna.qna_id}<br />
                제목 : {qna.title}<br />
                작성자 : {qna.question_user}<br />
                카테고리 : {qna.category}<br />
                등록일 : {qna.date}<br />
                {qna.question}<br />
                

            </div>
        );
    }
}

export default QnaDetailView;

