import React, { Component } from 'react';
import {observer} from 'mobx-react';
import QnaStore from '../store/QnaStore';
import QnaMainView from '../component/QnaMainView';

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
                <button onClick={()=>createQna()}>글쓰기</button>
                <button onClick={()=>selectQnaAll()}>목록</button>
            </div>
        );
    }
}

export default observer(QnaMainContainer);