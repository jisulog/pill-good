import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import {observer} from 'mobx-react';
import UserStore from "../store/UserStore";
import '../user.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from '@mui/styles';
import Button from '@mui/material/Button';



class UserJoinContainer extends Component {
    userStore = UserStore;
    // componentDidMount() {};


    render() {
        const {handlerSet, handlerJoin} = this.userStore; 

        const MyButton = styled(Button)({
            background: 'linear-gradient(45deg, #F9AF21 20%, #ECDB52 90%)',
            border: 0,
            borderRadius: 10,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            width: '500px',
            color: 'white',
            height: 48,
            padding: '0 30px',
          });

        return (
            <div className="align-join">
                <h2>회원가입</h2>
                <form>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '30ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="outlined-required"
                            label="이메일"
                            type="email"
                            name="email"                                               
                            onChange={(e)=>{handlerSet(e.target.name, e.target.value)}}/>

                       <FormControl sx={{ m: 1, minWidth: 260 }}>
                            <InputLabel id="demo-simple-select-helper-label">회원유형</InputLabel>
                            <Select          
                                id="demo-simple-select-helper"
                                label="회원유형"
                                name="type"
                                onChange={(e)=>handlerSet(e.target.name, e.target.value)}>
                                <MenuItem value="1">일반회원</MenuItem>
                                <MenuItem value="2">강사</MenuItem>
                                {/* <MenuItem value={3}>관리자</MenuItem> */}
                            </Select>
                       </FormControl>
                   </div>
                    <div>
                        <TextField
                            id="outlined-required"
                            label="비밀번호"
                            type="password"
                            name="password"       
                            placeholder="영문자, 숫자 포함 8자 이상 입력"   
                            onChange={(e)=>{passwordEquivCheck(e.target.name, e.target.value);
                                            handlerSet(e.target.name, e.target.value)}}/>
                  
                        <TextField
                            id="outlined-required"
                            label="비밀번호 확인"
                            type="password"
                            name="checkPassword"
                            placeholder="영문자, 숫자 포함 8자 이상 입력"                                 
                            onChange={(e)=>{passwordEquivCheck(e.target.name, e.target.value);
                                            handlerSet(e.target.name, e.target.value)}}/>
                        <div>
                            <div>&nbsp; 비밀번호는 영문자, 숫자를 포함하여 8자 이상을 사용하세요.</div>
                            <div id="checkTrue" className="blue-color hidden">
                                &nbsp; 비밀번호가 일치합니다.
                            </div>
                            <div id="checkFalse" className="red-color hidden">
                                &nbsp; 비밀번호가 일치하지 않습니다.
                            </div>
                        </div>    
                    </div>
                    <div>
                        <TextField
                            id="outlined-required"
                            label="이름"
                            type="text"
                            name="name"                               
                            onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
                   
                        <TextField
                            id="outlined-required"
                            label="연락처"
                            type="text"
                            name="phone"
                            placeholder="000-0000-0000"                               
                            onChange={(e)=>{handlerSet(e.target.name, e.target.value)}}/>
                   </div>
                   <MyButton id="mainButton" onClick={()=>handlerJoin(check)}>가입하기</MyButton>
                </Box> 
                <Button href="/user/login">로그인</Button>
                <hr/>
                </form>
            </div>
        );
    }
}

let password = "";
let checkPassword = "";
let check = "";

const passwordEquivCheck = (name, value) => {
    const checkTrue = document.querySelector("#checkTrue");
    const checkFalse = document.querySelector("#checkFalse");

    if (name === "password") {
        password = value;
    } 
    else if (name === "checkPassword") {
        checkPassword = value;
    }

    if (password === "" || checkPassword === "") {
        checkTrue.classList.add("hidden");
        checkFalse.classList.add("hidden");
        check = "no";
    } 
    else if (password === checkPassword) {
        checkTrue.classList.remove("hidden");
        checkFalse.classList.add("hidden");
        check = "okay";
    } 
    else {
        checkTrue.classList.add("hidden");
        checkFalse.classList.remove("hidden");
        check = "no";
    }

};

export default observer(UserJoinContainer);

  
