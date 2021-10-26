import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import UserLoginContainer from '../user/container/UserLoginContainer';
import UserStore from "../user/store/UserStore";
import "./NavBar.css";


class NavBar extends Component {

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

        const {handlerLogout} = this.userStore;
        
        const theme = createTheme();

        theme.typography.Nav = {
        fontSize: '1.2rem'
        }
                       

      return (
        <div id="background_color">
            <div className="imageBox">
                <Link href="/">
                    <img alt="logo" src="https://pillgoodimagebucket.s3.ap-northeast-2.amazonaws.com/logo/logo_120px.png"/>
                </Link>
            </div>
            <div id="button-align">
                    <Button
                        style={{maxWidth: '150px', maxHeight: '120px', minWidth: '150px', minHeight: '120px'}}
                        id="basic-button"
                        aria-controls="basic-menu">
                        <Link href="/membership" underline="none" color="black">
                            <ThemeProvider theme={theme}>
                                <Typography variant="Nav">멤버십</Typography>
                            </ThemeProvider>
                        </Link>
                    </Button>
                    <Button
                        style={{maxWidth: '150px', maxHeight: '120px', minWidth: '150px', minHeight: '120px'}}
                        id="basic-button"
                        aria-controls="basic-menu">
                        <Link href="/lec" underline="none" color="black">
                            <ThemeProvider theme={theme}>
                                <Typography variant="Nav">강의 예약</Typography>
                            </ThemeProvider>
                        </Link>
                    </Button>
                <Button
                    style={{maxWidth: '150px', maxHeight: '120px', minWidth: '150px', minHeight: '120px'}}
                    id="basic-button"
                    aria-controls="basic-menu">
                    <Link href="/qna" underline="none" color="black">
                        <ThemeProvider theme={theme}>
                            <Typography variant="Nav">상담</Typography>
                        </ThemeProvider>
                    </Link>
                </Button>
                {window.localStorage.getItem('email') !== null
                ?
                <Button
                    style={{maxWidth: '150px', maxHeight: '120px', minWidth: '150px', minHeight: '120px'}}
                    id="basic-button"
                    aria-controls="basic-menu">
                    <Link href="/member" underline="none" color="black">   
                        <ThemeProvider theme={theme}>
                            <Typography variant="Nav">마이페이지</Typography>
                        </ThemeProvider>   
                    </Link>
                </Button>
                :    
                null
                }
                {window.localStorage.getItem('email') !== null
                ?
                <Button
                style={{maxWidth: '150px', maxHeight: '120px', minWidth: '150px', minHeight: '120px', color:"black" }}
                id="basic-button"
                aria-controls="basic-menu"
                onClick={()=>handlerLogout()}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="Nav">로그아웃</Typography>
                    </ThemeProvider>   
                </Button>
                :    
                <Button
                    style={{maxWidth: '150px', maxHeight: '120px', minWidth: '150px', minHeight: '120px', color:"black" }}
                    id="basic-button"
                    aria-controls="basic-menu"
                    onClick={this.handleOpen}>
                    <Modal
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <Box>
                            <UserLoginContainer/> 
                        </Box>
                    </Modal>
                    <ThemeProvider theme={theme}>
                        <Typography variant="Nav">로그인</Typography>
                    </ThemeProvider> 
                </Button>
                }
            </div>    
        </div>
      );
    }
}

export default NavBar;