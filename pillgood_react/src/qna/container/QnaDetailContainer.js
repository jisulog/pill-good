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
        const {qna, handlerRemove} = this.qnaStore;
        const admin = window.localStorage.getItem("is_admin");
        return (
            <div>
                <h2 style={{textAlign:'center', color:'#574934'}} >QnA</h2>
                <QnaDetailView key={qna.id} qna={qna} ondelete={handlerRemove} admin={admin}/>
            </div>
        );
    }
}

export default observer(QnaDetailContainer);