import React, { Component } from 'react';
import { observer } from 'mobx-react'
import ManagerStore from '../store/ManagerStore';

import TextField from '@mui/material/TextField';
import {MenuItem, Typography } from "@material-ui/core";
import Button from '@mui/material/Button';

class ManagerLecUpdateContainer extends Component {
  managerStore = ManagerStore;


  render() {
    const { lec, updateLec, deleteLec, setLecProps, handlerSetFile } = this.managerStore;
    return (
<div>
          <h1>강의 수정</h1>

              <div>
              <Typography component="h2" variant="body1" gutterBottom>
                  강의명
              </Typography>
                 <TextField type="text"
                            id="title"
                            variant="outlined"
                            name="title"
                            value={lec.title}
                            onChange={(e) => setLecProps(e.target.name, e.target.value)}
                 />
              </div>
              <div>
                <Typography component="h2" variant="body1" gutterBottom>
                  강의 내용
              </Typography>
                <TextField
                                name="content" 
                                id ="content"
                                variant="outlined"
                                multiline
                                rows={3}
                                style ={{width: '30ch'}}
                                value={lec.content} 
                                onChange={(e) => setLecProps(e.target.name, e.target.value)}
                                placeholder="강의내용 " />
              </div>
              <div>
                <Typography component="h2" variant="body1" gutterBottom>
                  파일첨부
                </Typography>
                <input accept="image/*"  type="file" name ="lec_image" onChange={(e)=>
                handlerSetFile(e)} />
              </div>
              <div>
              <Typography component="h2" variant="body1" gutterBottom>
                  장소
               </Typography>
                  <TextField select style ={{width: '20%'}} name="room" id="room" value={lec.room||""}
                        onChange={(e) => setLecProps(e.target.name, e.target.value)}>
                          <MenuItem value="">--강의실--</MenuItem>
                          <MenuItem value="301호">301호</MenuItem>
                          <MenuItem value="302호">302호</MenuItem>
                          <MenuItem value="303호">303호</MenuItem>
                          <MenuItem value="201호">201호</MenuItem>
                          <MenuItem value="202호">202호</MenuItem>
                          <MenuItem value="101호">101호</MenuItem>
                        </TextField><br />
              </div>
              <div>
                 <Typography component="h2" variant="body1" gutterBottom>
                  날짜
               </Typography>
                  <input type="date" id="date"name="date" value={lec.date}
                    onChange={(e) => setLecProps(e.target.name, e.target.value)}/>
              </div>
              <div>
                <Typography component="h2" variant="body1" gutterBottom>
                  시간
                </Typography>
                <TextField
                          type="time"
                          value={lec.time}
                          style ={{width: '20%'}}
                          name="time"
                          onChange={(e) => setLecProps(e.target.name, e.target.value)}
                          />
              </div>
              <div>
              <Typography component="h2" variant="body1" gutterBottom>
                  난이도
               </Typography>
                  <TextField select style ={{width: '20%'}} name="level" id="level" value={lec.level||""}
                        onChange={(e) => setLecProps(e.target.name, e.target.value)}>
                          <MenuItem value="">--난이도--</MenuItem>
                          <MenuItem value="1">level-1 </MenuItem>
                          <MenuItem value="2">level-2 </MenuItem>
                          <MenuItem value="3">level-3 </MenuItem>
                        </TextField><br />
              </div> 
              <div>
                <Typography component="h2" variant="body1" gutterBottom>
                  강사번호 (*본인의 강사 번호를 입력하세요)
                </Typography>
                 <TextField
                            type="number"
                            id="email"
                            name="email"
                            style ={{width: '20%'}}
                            value={lec.email||''}
                            onChange={(e) => setLecProps(e.target.name, e.target.value)}
                            /><br/>
              </div>
              <div>
                 <Typography component="h2" variant="body1" gutterBottom>
                  인원
                </Typography>
                       <TextField select style ={{width: '20%'}} name="number" id="number" value={lec.number||""}
                        onChange={(e) => setLecProps(e.target.name, e.target.value)}>
                          <MenuItem value="">--인원--</MenuItem>
                          <MenuItem value="1">1인 </MenuItem>
                          <MenuItem value="2">2인 </MenuItem>
                          <MenuItem value="8">8인</MenuItem>
                        </TextField><br />

   <Button onClick={() => updateLec()}>수정</Button>
   <Button onClick={() => deleteLec()}>삭제</Button>

            </div>
      </div>
      // <div>
      //   강의명: <input type="text" id="title" name="title" value={lec.title || ""}
      //     onChange={(e) => setLecProps(e.target.name, e.target.value)} placeholder="강의명" /><br />
      //   날짜: <input type="date" id="date" name="date" value={lec.date || ""}
      //     onChange={(e) => setLecProps(e.target.name, e.target.value)} /><br />

      //   시간: <input type="time" id="time" name="time" value={lec.time || ""}
      //     onChange={(e) => setLecProps(e.target.name, e.target.value)} /><br />
      //   강의실:
      //   <select name="room" id="room" value={lec.room || ""}
      //     onChange={(e) => setLecProps(e.target.name, e.target.value)}>
      //     <option value="">--강의실--</option>
      //     <option value="301호">301호</option>
      //     <option value="302호">302호</option>
      //     <option value="303호">303호</option>
      //     <option value="201호">201호</option>
      //     <option value="202호">202호</option>
      //     <option value="101호">101호</option>
      //   </select><br />
      //   인원:
      //   <select name="number" id="number" value={lec.number || ""}
      //     onChange={(e) => setLecProps(e.target.name, e.target.value)}>
      //     <option value="">--인원--</option>
      //     <option value="1">1인</option>
      //     <option value="2">2인</option>
      //     <option value="8">8인</option>
      //   </select><br />
      //   난이도:
      //   <select name="level" id="level" value={lec.level || ""}
      //     onChange={(e) => setLecProps(e.target.name, e.target.value)}>
      //     <option value="">--난이도--</option>
      //     <option value="1">level-1</option>
      //     <option value="2">level-2</option>
      //     <option value="3">level-3</option>
      //   </select><br />
      //   <textarea name="content" id="content" value={lec.content || ""}
      //     onChange={(e) => setLecProps(e.target.name, e.target.value)}></textarea><br />
      //   이미지:<input
      //                       type="file"
      //                       name="image"
      //                       onChange={(e) => handlerSetFile(e)}
      //                   />
      //   <div name="status" value={lec.status} onChange={(e) => setLecProps(e.target.name, e.target.value)}>
      //   <input type="radio" id="status1" name="status" value="1" />
      //     <label htmlFor="stay">대기</label>
      //     <input type="radio" id="status2" name="status" value="2" />
      //     <label htmlFor="ok">승인</label>
      //     <input type="radio" id="status3" name="status" value="3" />
      //     <label htmlFor="reject">반려</label>
      //   </div>
      //   <button onClick={() => updateLec()}>수정</button>
      //   <button onClick={() => deleteLec()}>삭제</button>
      // </div>
    );
  }
}

export default observer(ManagerLecUpdateContainer);