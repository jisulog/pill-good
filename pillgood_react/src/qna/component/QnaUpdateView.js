import React, { Component } from 'react';
import QnaStore from '../store/QnaStore';
import {observer} from 'mobx-react';

class QnaUpdateView extends Component {
    qnaStore = QnaStore;
    render() {
        const {qna, handlerSet, handlerModify} = this.qnaStore;
        return (
            <div>
                <h1>update page</h1>
                <form>
                    <div>
                        <lable>제목 : </lable>
                        <input type="text" name="title" value={qna.title||""}
                        onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
                    </div>
                  
                    <div>
                        <lable>작성자 : </lable>
                        
                    </div>
                    <div>
                        <lable>카테고리 : </lable>
                        <select name="type" value={this.qnaStore.qna.type} onChange={(e)=>handlerSet(e.target.name, e.target.value)}>
                            <option value="none">카테고리</option>
                            <option value="1">예약문의</option>
                            <option value="2">강의문의</option>
                            <option value="3">운동문의</option>
                            <option value="4">기타문의</option>
                        </select>
                    </div>
                    <div>
                        <lable>작성일 : </lable>
                    </div>
                    <div>
                        내용<br/>
                        <input type="text" name="question" value={qna.question} 
                        onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
                    </div>
                    <button onClick={()=>handlerModify()}>수정</button>
                    <button >목록</button>
                </form>  
            </div>
        );
    }
}

export default observer(QnaUpdateView);