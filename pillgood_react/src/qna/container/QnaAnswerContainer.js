import React, { Component } from 'react';
import { observer } from 'mobx-react'
import QnaStore from '../store/QnaStore';
import QnaAnswerView from '../component/QnaAnswerView';

class QnaAnswerContainer extends Component {
    qnaStore = QnaStore;

    componentDidMount() {
        const {id} = this.props;
        this.qnaStore.selectQna(id);
    }

    render() {
        const {qna, handlerSet, handlerModify} = this.qnaStore;
        return (
            <div>
                <QnaAnswerView qna={qna} handlerSet={handlerSet} onupdate={handlerModify}/>
            </div>
        );
    }
}

export default observer(QnaAnswerContainer);