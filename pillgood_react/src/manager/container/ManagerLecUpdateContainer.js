import React, { Component } from 'react';
import { observer } from 'mobx-react'
import ManagerStore from '../store/ManagerStore';


class ManagerLecUpdateContainer extends Component {
  managerStore = ManagerStore;

  componentDidMount() {
    const {id} = this.props;
    this.managerStore.selectLec(id);
  }

  render() {
    const { lec, updateLec, deleteLec, setLecProps } = this.managerStore;
    return (
      <div>
        강의명: <input type="text" id="title" name="title" value={lec.title||""} 
        onChange={(e)=>setLecProps(e.target.name, e.target.value)} placeholder="강의명" /><br />
        <textarea name="content" id="content" value={lec.content||""}
        onChange={(e)=>setLecProps(e.target.name, e.target.value)}></textarea><br />
        강의실:
        <select name="room" id="room" value={lec.room||""}
        onChange={(e)=>setLecProps(e.target.name, e.target.value)}>
          <option value="">--강의실--</option>
          <option value="301호">301호</option>
          <option value="302호">302호</option>
          <option value="303호">303호</option>
          <option value="201호">201호</option>
          <option value="202호">202호</option>
          <option value="101호">101호</option>
        </select><br />
        날짜: <input type="date" id="date" name="date" value={lec.date||""}
        onChange={(e)=>setLecProps(e.target.name, e.target.value)} /><br />
        시간: <input type="time" id="time" name="time"  value={lec.time||""}
        onChange={(e)=>setLecProps(e.target.name, e.target.value)}/><br />
        난이도: 
        <select name="level" id="level" value={lec.level||""}
        onChange={(e)=>setLecProps(e.target.name, e.target.value)}>
          <option value="">--난이도--</option>
          <option value="1">level-1</option>
          <option value="2">level-2</option>
          <option value="3">level-3</option>
        </select><br />
        인원:
        <select name="number" id="number" value={lec.number||""}
        onChange={(e)=>setLecProps(e.target.name, e.target.value)}>
          <option value="">--인원--</option>
          <option value="1">1인</option>
          <option value="2">2인</option>
          <option value="3">8인</option>
        </select><br />
        활성
        <div name="status" value={lec.status||""}
        onChange={(e)=>setLecProps(e.target.name, e.target.value)}>
          <input type="radio" id="status2" name="status" value="2" />
          <label for="dewey">승인</label>
          <input type="radio" id="status8" name="status" value="3" />
          <label for="louie">반려</label>
        </div>
        <button onClick={()=>updateLec()}>수정</button> &nbsp;&nbsp; 
        <button onClick={()=>deleteLec()}>삭제</button> &nbsp;&nbsp; 
      </div>
    );
  }
}

export default observer(ManagerLecUpdateContainer);