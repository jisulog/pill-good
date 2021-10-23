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
        const {qna, handlerSet, handlerAnswer} = this.qnaStore;
        const user = window.localStorage.getItem("id");

        return (
            <div>
                <QnaAnswerView qna={qna} handlerSet={handlerSet} onAnswer={handlerAnswer} adminId={user}/>
            </div>
        );
    }
}

export default observer(QnaAnswerContainer);