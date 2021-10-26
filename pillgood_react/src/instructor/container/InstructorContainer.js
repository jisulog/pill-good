import React, { Component } from 'react';
import InstructorStore from '../store/InstructorStore';
import {observer} from 'mobx-react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {MenuItem, Typography } from "@material-ui/core";
import TimePicker from '@mui/lab/TimePicker';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import moment from 'moment';


class InstructorContainer extends Component {
  instructorStore = InstructorStore;
  render() {
    const { lec, createLec, handlerSetFile, changeDate, handlerSetProps} = this.instructorStore;
    return (
      <div>
          <h1>강의 등록</h1>

              <div>
              <Typography component="h2" variant="body1" gutterBottom>
                  강의명
              </Typography>
                 <TextField type="text"
                            id="title"
                            variant="outlined"
                            name="title"
                            value={lec.title}
                            onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}
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
                                onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}
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
                  <TextField select style ={{width: '15ch'}} name="room" id="room" value={lec.room||""}
                        onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}>
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

                  <input   type="date" id="date"name="date" value={lec.date}
                                onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}/>

              </div>


              <div>
                <Typography component="h2" variant="body1" gutterBottom>
                  시간
                </Typography>
                <TextField
                          type="time"
                          value={lec.time}
                          name="time"
                          onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}
                          />
              </div>
              <div>
              <Typography component="h2" variant="body1" gutterBottom>
                  난이도
               </Typography>
                  <TextField select style ={{width: '10%'}} name="level" id="level" value={lec.level||""}
                        onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}>
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
                            style ={{width: '10%'}}
                            value={lec.email||''}
                            onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}
                            /><br/>
              </div>
              <div>
                 <Typography component="h2" variant="body1" gutterBottom>
                  인원
                </Typography>
                       <TextField select style ={{width: '10%'}} name="number" id="number" value={lec.number||""}
                        onChange={(e)=>handlerSetProps(e.target.name, e.target.value)}>
                          <MenuItem value="">--인원--</MenuItem>
                          <MenuItem value="1">1인 </MenuItem>
                          <MenuItem value="2">2인 </MenuItem>
                          <MenuItem value="8">8인</MenuItem>
                        </TextField><br />

                      <button onClick={()=>createLec()}>등록</button>&nbsp;&nbsp;

            </div>
      </div>
    );
  }
}

export default observer(InstructorContainer);