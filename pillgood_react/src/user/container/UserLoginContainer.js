import React, { Component } from "react";
import {observer} from 'mobx-react';
import UserStore from "../store/UserStore";


class UserLoginContainer extends Component {
    userStore = UserStore;


//    componentDidMount() {
//        this.userStore.selectUser();
//    }

    render() {
        const {user, handlerSet, handlerLogin} = this.userStore;

        return (
            <div>
                <h1>Sing-In Page</h1>
                <form>
                    <div>
                        <label>이메일 : </label>
                        <input type="email"
                               name="email"
                               value={this.userStore.user.email}
                               onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <label>비밀번호 : </label>
                        <input type="password"
                               name="password"
                               value={this.userStore.user.password}
                               onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
                    </div>
                    <button onClick={()=>handlerLogin()}>로그인</button>
                </form>
            </div>
        );
    }
}

export default observer(UserLoginContainer);
