import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import UserLoginContainer from './user/container/UserLoginContainer';
import UserStore from "./user/store/UserStore";
import './NavBar.css';

class Tab extends Component {

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
        <div>
          <div>
                <span>
                <Button 
                    className="test"
                    id="basic-button"
                    aria-controls="basic-menu"                        
                ><Link to="/">
                    HOME
                    </Link>
                </Button>
                </span>
                <span>    
                <Button
                    id="basic-button"
                    aria-controls="basic-menu"                        
                ><Link to="/membership">
                    MEMBERSHIP
                    </Link>
                </Button>
                </span>
                <span>
                <Button
                    id="basic-button"
                    aria-controls="basic-menu"                        
                ><Link to="/lec">
                    LECTURE BOOK
                    </Link>
                </Button>
                </span>
                <span>
                <Button
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
                id="basic-button"
                aria-controls="basic-menu"
                onClick={()=>handlerLogout()}               
                >
                LOGOUT
                </Button>
                :    
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

export default Tab;