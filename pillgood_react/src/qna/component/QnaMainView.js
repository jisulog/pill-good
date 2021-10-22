import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
class QnaMainView extends Component {
    render() {
        const {qna} = this.props;
        return (
            <div>
                    번호 : {qna.qna_id}<br/>
                    <Link to={`/qna/detail/${qna.qna_id}`}>제목 : {qna.title}<br/></Link>
                    카테고리 : {qna.category}<br/>
                    작성자 : {qna.question_user}<br/>
                    작성일:{moment(qna.date).format("YYYY-MM-DD")}<br/>
                    

            </div>
        );
    }
}

export default QnaMainView;