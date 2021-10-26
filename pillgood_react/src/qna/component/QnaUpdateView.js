import React, { Component } from 'react';
import QnaStore from '../store/QnaStore';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class QnaUpdateView extends Component {
    qnaStore = QnaStore;
    render() {
        const {qna, onsetprops, onupdate} = this.props;
        return (
            <div>
                <h1>update page</h1>
                <form>
                    <div>
                        <lable>제목 : </lable>
                        <input type="text" name="title" value={qna.title||""}
                        onChange={(e)=>onsetprops(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <lable>카테고리 : </lable>
                        <select name="category" value={qna.category} onChange={(e)=>onsetprops(e.target.name, e.target.value)}>
                            <option value="none">카테고리</option>
                            <option value="예약문의">예약문의</option>
                            <option value="강의문의">강의문의</option>
                            <option value="운동문의">운동문의</option>
                            <option value="기타문의">기타문의</option>
                        </select>
                    </div>
                    <div>
                        내용<br/>
                        <input type="text" name="question" value={qna.question} 
                        onChange={(e)=>onsetprops(e.target.name, e.target.value)}/>
                    </div>
                    <input type="submit" onClick={()=>{onupdate(); this.props.history.push(`/qna/detail/${qna.qna_id}`)}} value="수정"/>
                    <Link to={`/qna/`}><button>목록</button></Link>
                </form>  
            </div>
        );
    }
}

export default withRouter(QnaUpdateView);