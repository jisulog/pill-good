import React, { Component } from "react";
import {observer} from 'mobx-react';
import InstructorStore from "../store/InstructorStore";
import UserListView from '../component/UserListView';


//LecStore로부터 데이터 받아서 쓸 것. 
class UserListContainer extends Component {
  instructorStore = InstructorStore;

    componentDidMount() {
        const {id} = this.props;
        console.log(id)
        this.instructorStore.selectAllUser(id); //mount 되면 전체 강의
    }
  
    render() {
        const {users} = this.instructorStore;
        const usersList = users.map((user)=>{
            return (<UserListView user = {user}/>)
        });   
        console.log(usersList)
        return(
            <div>
            <h1>회원 목록</h1>
             {usersList}
            </div>
          );
        }
      }
      

export default observer(UserListContainer);
