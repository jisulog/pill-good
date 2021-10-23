import { Component } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



// logout
import UserStore from "../user/store/UserStore";


class Home extends Component {

    state = {
        anchorEl: null
    }

    // logout
    userStore = UserStore;

    render() {

        const anchorEl = null;
        const open = Boolean(anchorEl);
        const handleClick = (e) => {
          this.setState(null);
        };
        const handleClose = () => {
            this.setState(null);
        };

        const { handlerLogout } = this.userStore;
        
        
        return (
            <div>
                <div>
                    <span>
                    <Button
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
                    <Button
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick()}
                    >
                        LOGIN
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose()}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem><Link to="/user/login">Login</Link></MenuItem>
                        <MenuItem onClick={ handlerLogout() }>Logout</MenuItem>
                        <MenuItem><Link to="/user/join">Sign-up</Link></MenuItem>
                    </Menu>
                    </span>
                    <hr/>
               </div>
               <div>
                    <h1>WEBCOME PIL-GOOD!</h1>
                </div>
            </div>
        );
    }
}

export default Home;