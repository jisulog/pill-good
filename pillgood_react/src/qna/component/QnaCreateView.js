import React, { Component} from 'react';
import {observer} from 'mobx-react';
import { Link } from 'react-router-dom';

class QnaCreateView extends Component {
    render() {
        const {onsetprops, oncreate, member} = this.props;
        return (
            <div>
                <h1>create page</h1>
                <form>
                    <div>
                        <lable htmlFor ="title">제목 : </lable>
                        <input type="text" name="title" id = "title"
                        onChange={(e)=>onsetprops(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <lable htmlFor = "category">카테고리 : </lable>
                        <select name="category" id="category" onChange={(e)=>onsetprops(e.target.name, e.target.value)}>
                            <option value="none">카테고리</option>
                            <option value="예약문의">예약문의</option>
                            <option value="강의문의">강의문의</option>
                            <option value="운동문의">운동문의</option>
                            <option value="기타문의">기타문의</option>
                        </select>
                    </div>
                    <div>
                        내용<br/>
                        <textarea name="question" 
                        onChange={(e)=>onsetprops(e.target.name, e.target.value)}/>
                    </div>
                    <input type="submit" onClick={()=>oncreate(`${member.id}`)} value= "저장" />
                    <Link to={`/qna/`}><button>목록</button></Link>
                   
                </form>  

            </div>
        );
    }
}

export default observer(QnaCreateView);
