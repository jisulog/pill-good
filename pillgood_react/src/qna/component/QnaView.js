import React, { Component } from 'react';

class QnaView extends Component {
    render() {
        const {qna} = this.props;
        return (
            <div>
                제목 : {qna.title}
            </div>
        );
    }
}

export default QnaView;