import React, { Component } from 'react';
import { observer } from 'mobx-react';
import QnaUpdateView from '../component/QnaUpdateView';
import QnaStore from '../store/QnaStore';
class QnaUpdateContainer extends Component {
    qnaStore = QnaStore;

    componentDidMount() {
        this.qnaStore.selectQna(this.props.qnaId);
    }
    render() {
        const {qna, handlerSet, handlerModify} = this.qnaStore;
        return (
            <div>
                <h2 style={{textAlign:'center', color:'#574934'}} >QnA Update</h2>
                <QnaUpdateView qna = {qna} onsetprops = {handlerSet} onupdate = {handlerModify}/>
            </div>
        );
    }
}

export default observer(QnaUpdateContainer);