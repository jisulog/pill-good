import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import UserLoginContainer from './user/container/UserLoginContainer';
import UserStore from "./user/store/UserStore";
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
                       

      return (
        <div id="background_color">
          <div>
                <span>
                <Button 
                    style={{maxWidth: '150px', maxHeight: '120px', minWidth: '150px', minHeight: '120px'}}
                    id="basic-button"
                    aria-controls="basic-menu"                        
                ><Link to="/">
                    <img alt="logo" src="https://pillgoodimagebucket.s3.ap-northeast-2.amazonaws.com/logo/logo_120px.png"/>
                    </Link>
                </Button>
                </span>
                <span>    
                <Button
                    style={{maxWidth: '150px', maxHeight: '120px', minWidth: '150px', minHeight: '120px'}}
                    id="basic-button"
                    aria-controls="basic-menu"                        
                ><Link to="/membership">
                    MEMBERSHIP
                    </Link>
                </Button>
                </span>
                <span>
                <Button
                    style={{maxWidth: '150px', maxHeight: '120px', minWidth: '150px', minHeight: '120px'}}
                    id="basic-button"
                    aria-controls="basic-menu"                        
                ><Link to="/lec">
                    LECTURE BOOK
                    </Link>
                </Button>
                </span>
                <span>
                <Button
                    style={{maxWidth: '150px', maxHeight: '120px', minWidth: '150px', minHeight: '120px'}}
                    id="basic-button"
                    aria-controls="basic-menu"                        
                ><Link to="/qna">
                    INQUIRY
                    </Link>
                </Button>
                </span>
                <span>
                {window.localStorage.getItem('email') !== null
                ?
                <Button
                    style={{maxWidth: '150px', maxHeight: '120px', minWidth: '150px', minHeight: '120px'}}
                    id="basic-button"
                    aria-controls="basic-menu"
                >
                    <Link to="/member">                    
                    MyPage
                    </Link>
                </Button>
                :    
                null
                }
                </span>
                <span>
                {window.localStorage.getItem('email') !== null
                ?
                <Button
                style={{maxWidth: '150px', maxHeight: '120px', minWidth: '150px', minHeight: '120px'}}
                id="basic-button"
                aria-controls="basic-menu"
                onClick={()=>handlerLogout()}               
                >
                LOGOUT
                </Button>
                :    
                <Button
                    style={{maxWidth: '150px', maxHeight: '120px', minWidth: '150px', minHeight: '120px'}}
                    id="basic-button"
                    aria-controls="basic-menu"
                    onClick={this.handleOpen}                        
                >
                    <Modal
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <Box>
                            <UserLoginContainer/> 
                        </Box>
                    </Modal>
                LOGIN
                </Button>
                }
                </span>
                <hr/>
            </div>
        </div>
      );
    }
}

export default NavBar;