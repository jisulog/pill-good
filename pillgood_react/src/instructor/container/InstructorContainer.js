import React, { Component } from 'react';
import InstructorStore from '../store/InstructorStore';
import {observer} from 'mobx-react';
import { Link } from 'react-router-dom';

class InstructorContainer extends Component {
  instructorStore = InstructorStore;
  render() {
    const { lec, createLec,  handlerSetProps} = this.instructorStore;
    return (
      <div>
          <h1>강의 등록</h1>
          
              <div>
                강의명 : <input type="text"
                                id="title"
                                name="title" 
                                value={lec.title}
                                onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}
                                placeholder="강의명 " />
              </div>
              <div>
                강의내용 : <textarea 
                                name="content" 
                                id ="content"
                                value={lec.content} 
                                onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}
                                placeholder="강의내용 " />
              </div>
              <div>
                장소 : <select name="room" id="room" value={lec.room||""}
                        onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}>
                          <option value="">--강의실--</option>
                          <option value="301호">301호</option>
                          <option value="302호">302호</option>
                          <option value="303호">303호</option>
                          <option value="201호">201호</option>
                          <option value="202호">202호</option>
                          <option value="101호">101호</option>
                        </select><br />

              </div>
              <div>
                날짜 : <input   type="date" id="date"name="date" value={lec.date}
                                onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}/>
              </div>
              <div>
                시간 : <input   type="time" id="time" name="time" value={lec.time}
                                onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}/>
              </div>
              <div>
                난이도 : <select name="level" id="level" value={lec.level||""}
                        onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}>
                          <option value="">--난이도--</option>
                          <option value="1">level-1</option>
                          <option value="2">level-2</option>
                          <option value="3">level-3</option>
                        </select><br />
              </div> 
              <div>
                강사명 : <input  type="number" id="email" name="email" value={lec.email||''}
                                onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}
                                /><br/>
              </div>
                인원 :<div name="number" value={lec.number||''} onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}>
                      <input type="radio" id="1" name="number" value="1" />
                      <label htmlFor="1">1인</label>
                      <input type="radio" id="2" name="number" value="2"/>
                      <label htmlFor="2">2인</label>
                      <input type="radio" id="3" name="number" value="3"/>
                      <label htmlFor="8">8인</label>
                      </div>


                      <button onClick={()=>createLec()}>등록</button>&nbsp;&nbsp;
                      <Link to= "/instructor/lec"><button >취소</button></Link>&nbsp;&nbsp;

      </div>
    );
  }
}

export default observer(InstructorContainer);