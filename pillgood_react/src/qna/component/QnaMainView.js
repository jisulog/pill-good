import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class QnaMainView extends Component {
    render() {
        const {qna} = this.props;
        return (
            <div>
                    번호 : {qna.qna_id}<br/>
                    <Link to={`/qna/detail/${qna.qna_id}`}>제목 : {qna.title}<br/></Link>
                    작성자 : {qna.question_user.name}<br/>
                    작성일: {qna.date}<br/>
                    

            </div>
        );
    }
}

export default QnaMainView;