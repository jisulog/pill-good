import React, { Component } from 'react';
import QnaStore from '../store/QnaStore';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import "../qna.css";
class QnaUpdateView extends Component {
    qnaStore = QnaStore;
    render() {
        const {qna, onsetprops, onupdate} = this.props;
        return (
            <div>
                <form>
                <Card sx={{maxWidth: 1000,maxHeight: 2000}} className="margin-center">
                    <CardContent>
                    <Input placeholder="Title" id="title"
                                label="Title"
                                variant="standard"
                                input="input"
                                type="text"
                                name="title"
                                fullWidth
                                value={qna.title||""}
                                onChange={(e) => onsetprops(e.target.name, e.target.value)}/>
           
           </CardContent>
          <CardContent>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Category
                            </InputLabel>
                            <NativeSelect
                                defaultValue={30}
                                fullWidth
                                inputProps={{
                                    name: 'category',
                                    id: 'category'
                                    
                                }}
                                name="category" 
                                value={qna.category}
                                onChange={(e) => onsetprops(e.target.name, e.target.value)}>
                                <option value="none">카테고리</option>
                                <option value="예약문의">예약문의</option>
                                <option value="강의문의">강의문의</option>
                                <option value="운동문의">운동문의</option>
                                <option value="기타문의">기타문의</option>
                            </NativeSelect>
                      
                        <div >
                            <br/> 
                            내용 :    
                            <textarea className="contents" type="text" name="question" value={qna.question} 
                            onChange={(e)=>onsetprops(e.target.name, e.target.value)}>
                            </textarea>
                        </div>
                        <div className="button-align">
                        <Button variant="contained" input="input" type="submit" onClick={()=>{onupdate()}} value="수정">수정</Button>
                        <Button variant="contained"><Link to={`/qna/`}>목록</Link></Button>
                        </div>
                    </CardContent>
                </Card>
                </form>  
            </div>
        );
    }
}

export default withRouter(QnaUpdateView);