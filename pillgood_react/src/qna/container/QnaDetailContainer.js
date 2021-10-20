import React, {Component} from 'react';
import QnaDetailView from '../component/QnaDetailView';
import QnaStore from '../store/QnaStore';
import {observer} from 'mobx-react'

class QnaDetailContainer extends Component {
    qnaStore = QnaStore;

    componentDidMount() {
        const {id} = this.props;
        this.qnaStore.selectQna(id);
    }
    render() {
        const {qna} = this.qnaStore;

        return (
            <div>
                <h1>QnA</h1>
                <QnaDetailView key={qna.id} qna={qna}/>
            </div>
        );
    }
}

export default observer(QnaDetailContainer);