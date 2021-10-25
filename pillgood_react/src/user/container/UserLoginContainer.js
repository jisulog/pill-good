import React, { Component } from "react";
import {observer} from 'mobx-react';
import UserStore from "../store/UserStore";
import '../user.css';

import Modal from '@mui/material/Modal';
import UserJoinContainer from './UserJoinContainer';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/styles';
import Button from '@mui/material/Button';
import favicon from '../image/favicon.png';


class UserLoginContainer extends Component {
    userStore = UserStore;

    state = {
        open: false
    };

    handleOpen = e => {
        this.setState({open : true});
    };

    handleClose = () => {
        this.setState({open : false});
    };

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
                <span>아직 회원이 아니신가요?</span>
                <Button
                    id="basic-button"
                    aria-controls="basic-menu"
                    onClick={this.handleOpen}                        
                    >
                    <Modal
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <Box>
                            <UserJoinContainer/> 
                        </Box>
                    </Modal>
                    회원가입
                </Button>
                <hr/>
                <img alt="favicon" src={favicon}/>
            </div>
        );
    }
}

export default observer(UserLoginContainer);