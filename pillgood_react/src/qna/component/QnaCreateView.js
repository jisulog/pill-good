import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "../qna.css";
class QnaCreateView extends Component {
    render() {
        const {onsetprops, oncreate, member} = this.props;
        return (
            <div>
                <form>
                    <Card sx={{maxWidth: 1000,maxHeight: 2000}}
                        className="margin-center">
                        <CardContent>
                            <TextField
                                id="title"
                                label="Title"
                                variant="standard"
                                input="input"
                                type="text"
                                name="title"
                                onChange={(e) => onsetprops(e.target.name, e.target.value)}/>

                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Category
                            </InputLabel>
                            <NativeSelect
                                defaultValue={30}
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
                                    name="question"
                                    onChange={(e) => onsetprops(e.target.name, e.target.value)}/>
                            </div>
                        </CardContent>

                        <div className="button-align">
                            <Button
                                variant="outlined"
                                input="input"
                                type="submit"
                                onClick={() => oncreate(`${member.id}`)}
                                value="저장">저장</Button>
                            <Link to={`/qna/`}>
                                <Button variant="outlined">
                                    목록
                                </Button>
                            </Link>
                        </div>
                    </Card>

                </form>

            </div>
        );
    }
}

export default observer(QnaCreateView);
