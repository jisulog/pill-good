import React, { Component } from 'react';
import InstructorStore from '../store/InstructorStore';
import {observer} from 'mobx-react';


class InstructorContainer extends Component {
  instructorStore = InstructorStore;

  render() {
  
    const { lec, handlerAdd,  handlerSetProps} = this.instructorStore;
    return (
      <div>
          <h1>강의 등록</h1>
          <form>
              <p>
                강의명 : <input type="text"
                                name="title" 
                                value={lec.title}
                                onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}
                                placeholder="강의명 " />
              </p>
              <p>
                첨부파일 : <input type="text"
                                name="img" 
                                value={lec.img} 
                                onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}
                                placeholder="==이미지 넣는 곳== " />
              </p>
              <p>
                강의내용 : <input type="text"
                                name="content" 
                                value={lec.content} 
                                onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}
                                placeholder="강의내용 " />
              </p>
              <p>
                장소 : <select  name="room" 
                                value={lec.room} 
                                onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}>
                                <option value="301호">301호</option>
                                <option value="302호">302호</option>
                                <option value="303호3">303호</option>
                       </select>
              </p>
              <p>
                날짜 : <select  name="date" 
                                value={lec.date} 
                                onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}
                                />
              </p>
              <p>
                시간 : <select  name="time" 
                                value={lec.time} 
                                onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}
                                />
              </p>
              <p>
                난이도 : <select name="level" 
                                value={lec.level} 
                                onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}>
                                <option value="level1">1</option>
                                <option value="level2">2</option>
                                <option value="level3">3</option>
                                <option value="level4">4</option>
                                <option value="level5">5</option>
                         </select>
              </p>
              <p>
                인원 : <label><input type="radio" name="number" value={lec.number} chekced= "checked"/>1&nbsp;&nbsp;</label>
                       <label><input type="radio" name="number" value={lec.number}/>2&nbsp;&nbsp;</label>
                       <label><input type="radio" name="number" value={lec.number}/>8&nbsp;&nbsp;</label>
              </p>
                <button onClick={()=>handlerAdd()}>등록</button> &nbsp;&nbsp;
               
         </form>
      </div>
    );
  }
}

export default observer(InstructorContainer);