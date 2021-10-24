import React, { Component } from "react";
import {observer} from 'mobx-react';
import UserStore from "../store/UserStore";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/styles';
import Button from '@mui/material/Button';
import '../user.css';


class UserLoginContainer extends Component {
    userStore = UserStore;

    render() {

        const {handlerSet, handlerLogin} = this.userStore;  

        const MyButton = styled(Button)({
            background: 'linear-gradient(45deg, #F9AF21 20%, #ECDB52 90%)',
            border: 0,
            borderRadius: 10,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            width: '300px',
            color: 'white',
            height: 48,
            padding: '0 30px',
          });


        return (
            <div className="align-login">
                <h2>로그인</h2>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '35ch' },
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
                            onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <TextField
                            id="outlined-required"
                            label="비밀번호"
                            type="password"
                            name="password"                               
                            onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
                    </div>
                    <MyButton id="mainButton" onClick={()=>handlerLogin()}>로그인</MyButton>
                    </Box> 
                <Button href="/user/join">회원가입</Button>
                <hr/>
            </div>
        );
    }
}

export default observer(UserLoginContainer);