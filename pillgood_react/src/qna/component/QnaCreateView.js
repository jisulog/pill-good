import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Input from '@mui/material/Input';
import "../qna.css";
class QnaCreateView extends Component {
    render() {
        const {onsetprops, oncreate, member} = this.props;
        const ariaLabel = { 'aria-label': 'description' };
        return (
            <div>
                <form>
                    <Card sx={{maxWidth: 1000,maxHeight: 2000}}
                        className="margin-center">
                        <CardContent>
                        <Input placeholder="Title" id="title"
                                label="Title"
                                variant="standard"
                                input="input"
                                type="text"
                                name="title"
                                fullWidth
                                onChange={(e) => onsetprops(e.target.name, e.target.value)} inputProps={ariaLabel} />
          
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
                                onChange={(e) => onsetprops(e.target.name, e.target.value)}>

                                <option value="예약문의">예약문의</option>
                                <option value="강의문의">강의문의</option>
                                <option value="운동문의">운동문의</option>
                                <option value="기타문의">기타문의</option>
                            </NativeSelect>

                            <div>
                                <br/>
                                <textarea
                                    className="contents"
                                    name="question"
                                    onChange={(e) => onsetprops(e.target.name, e.target.value)}/>
                            </div>
                            <div className="button-align">
                                <Button variant="contained" input="input" type="submit" onClick={() => oncreate(`${member.id}`)} value="저장">저장</Button>
                                <Button variant="contained"><Link to={`/qna/`}>목록</Link></Button>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </div>
        );
    }
}

export default observer(QnaCreateView);
