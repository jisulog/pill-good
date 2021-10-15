import React, { Component } from 'react';
import {observer} from 'mobx-react';
import QnaStore from '../store/QnaStore';
import QnaView from '../component/QnaView';
class QnaContainer extends Component {
    qnaStore = QnaStore;

    componentDidMount() {
        this.qnaStore.selectAll();
    }
    render() {
        const {qna} = this.qnaStore;
        return (
            <div>
                
                <QnaView qna = {qna} />
            </div>
        );
    }
}

export default observer(QnaContainer);