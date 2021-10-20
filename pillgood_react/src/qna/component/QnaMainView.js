import React, {Component} from 'react';

class QnaMainView extends Component {
    render() {
        const {qna} = this.props;
        return (
            <div>
                <p>
                   
                    번호 : {qna.qna_id}<br/>
                    제목 : {qna.title}<br/>
                    작성자 : {qna.question_user}<br/>
                    작성일: {qna.date}<br/>
                    
                </p>
            </div>
        );
    }
}

export default QnaMainView;