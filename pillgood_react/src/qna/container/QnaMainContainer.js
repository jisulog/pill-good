import React, { Component } from 'react';
import {observer} from 'mobx-react';
import QnaStore from '../store/QnaStore';
import QnaMainView from '../component/QnaMainView';
import { Link } from 'react-router-dom';

//List
class QnaMainContainer extends Component {
    qnaStore = QnaStore;

    componentDidMount() {
        this.qnaStore.selectQnaAll();
    }
    render() {
        const {qnas, createQna, selectQnaAll } = this.qnaStore;
        const qnaList = qnas.map(qna =>{
            return (<QnaMainView key={qna.qna_id} qna = {qna}/>)
        
        });
    
        return (
            <div>
                <h1>QnA List</h1>
                {qnaList}
                <Link to={`/qna/create/`}>글작성</Link>
                <Link to={`/qna/`}>목록</Link>
            </div>
        );
    }
}

export default observer(QnaMainContainer);