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
        const {qnas, createQna, selectQna,} = this.qnaStore;
        const qnaList = qnas.map(qna =>{
            return (<QnaMainView key={qna.qna_id} qna = {qna}/>)
        
        });
        
    
        return (
            <div>
                <h1>QnA List</h1>
                {qnaList}
                <Link to={`/qna/create/`}><button>글작성</button></Link>
                <Link to={`/qna/`}><button>목록</button></Link>
            </div>
        );
    }
}

export default observer(QnaMainContainer);