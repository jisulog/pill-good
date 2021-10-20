import React, { Component } from 'react';
import UserListContainer from '../container/UserListContainer';


//page를 하나의 html로 생각.
class UserListPage extends Component {
    render() {
        return (
            <div>
             <UserListContainer />
            </div>
        );
    }
}
  
export default UserListPage;