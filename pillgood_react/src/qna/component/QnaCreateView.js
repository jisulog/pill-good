import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
class QnaCreateView extends Component {
    render() {
        const {onsetprops, oncreate, member} = this.props;
        return (
            <div>
                <h1>create page</h1>
                <form>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)' : {
                                m: 1,
                                width: '30ch',
                          
                            }
                        }}
                        noValidate="noValidate"
                        autoComplete="off">
                        <TextField
                            id="title"
                            label="Title"
                            variant="standard"
                            input="input"
                            type="text"
                            name="title"
                            onChange={(e) => onsetprops(e.target.name, e.target.value)}/>
                    </Box>
                    <Box sx={{
                            minWidth: 120
                        }}>
              
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Category
                            </InputLabel>
                            <NativeSelect
                                defaultValue={30}
                                inputProps={{
                                    name: 'category',
                                    id: 'category'
                                    
                                }}
                                onChange={(e) => onsetprops(e.target.name, e.target.value)}
                                >
                        
                                <option value="예약문의">예약문의</option>
                                <option value="강의문의">강의문의</option>
                                <option value="운동문의">운동문의</option>
                                <option value="기타문의">기타문의</option>
                            </NativeSelect>
                 
                    </Box>
       
                    <div>
                        <br/>
                        <textarea
                            name="question"
                            onChange={(e) => onsetprops(e.target.name, e.target.value)}/>
                    </div>
                    <Stack spacing={2} direction="row">
                    <Button variant="outlined" input type="submit" onClick={() => oncreate(`${member.id}`)} value="저장">저장</Button>
                    <Link to={`/qna/`}><Button variant="outlined">
                        목록
                    </Button></Link>
                    </Stack>
                </form>

            </div>
        );
    }
}

export default observer(QnaCreateView);
