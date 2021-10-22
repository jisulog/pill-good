import React, { Component } from 'react';
import { observer } from 'mobx-react';
import QnaUpdateView from '../component/QnaUpdateView';
import QnaStore from '../store/QnaStore';
class QnaUpdateContainer extends Component {
    qnaStore = QnaStore;

    render() {
        const {qna, handlerSet, handlerModify} = this.qnaStore;
        return (
            <div>
                <QnaUpdateView qna = {qna} onsetprops = {handlerSet} onupdate = {handlerModify}/>
            </div>
        );
    }
}

export default observer(QnaUpdateContainer);