import React, { Component } from 'react';
import { observer } from 'mobx-react'
import InstructorStore from '../store/InstructorStore';
import { Link } from 'react-router-dom';


class InstructorLecUpdateContainer extends Component {
  instructorStore = InstructorStore;

  componentDidMount() {
    const {id} = this.props;
    console.log(id)
    this.instructorStore.selectLec(id);

  }

  render() {
    const {lec, updateLec, handlerSetProps } = this.instructorStore;
    return (
      <div>
        <h1>강의 수정</h1>
        강의명: <input type="text" id="title" name="title" value={lec.title||''}
        onChange={(e)=>handlerSetProps(e.target.name, e.target.value)} placeholder="강의명" /><br />
        강의 내용 : <textarea name="content" id="content" value={lec.content||""}
        onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}></textarea><br />
        장소: {lec.room}<br />
        날짜: {lec.date}<br />
        시간: {lec.time}<br />
        난이도: {lec.level}<br />
        강사명 : {lec.email}<br />
        인원 :{lec.number}<br />
        <button onClick={()=>updateLec()}>수정</button> &nbsp;&nbsp;
        <Link to= "/instructor/lec"><button >취소</button></Link>&nbsp;&nbsp;
      </div>
    );
  }
}

export default observer(InstructorLecUpdateContainer);