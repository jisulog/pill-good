import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {observer} from 'mobx-react';
import UserStore from "../store/UserStore";


class UserLoginContainer extends Component {
    userStore = UserStore;


//    componentDidMount() {
//        this.userStore.selectUser();
//    }

    render() {
        const {handlerSet, handlerLogin} = this.userStore;  


        return (
            <div>
                <h1>Sing-In Page</h1>
                <form>
                    <div>
                        <label>이메일 : </label>
                        <input type="email"
                               name="email"                               
                               onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <label>비밀번호 : </label>
                        <input type="password"
                               name="password"                               
                               onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
                    </div>
                    {/* link event안으로 변경하기 */}
                    {/* <Link to="/">                       */}
                      <input type="button" onClick={()=>handlerLogin()} value="로그인"/>
                    {/* </Link> */}
                </form>
                <h1>email:{this.userStore.user.email}</h1>
            </div>
        );
    }
}

export default observer(UserLoginContainer);

