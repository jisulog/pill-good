import React, { Component } from "react";
import {observer} from 'mobx-react';
import UserStore from "../store/UserStore";


class UserJoinContainer extends Component {
    userStore = UserStore;

    // componentDidMount() {};

    render() {
        const {user, handlerSet, handlerJoin} = this.userStore;

        return (
            <div>
                <h1>Sign-Up Page</h1>
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
                    <div>
                        <label>비밀번호 재확인 : </label>
                        <input type="password"
                               name="passwordCheck"
                               value={this.userStore.user.passwordCheck}
                               onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <label>이름 : </label>
                        <input type="text"
                               name="name"
                               value={this.userStore.user.name}
                               onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <label>연락처 : </label>
                        <input type="text"
                               name="phone"
                               value={this.userStore.user.phone}
                               onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
                   </div>
                   <div>
                        <label>회원유형 : </label>
                        <select name="type" value={this.userStore.user.type} onChange={(e)=>handlerSet(e.target.name, e.target.value)}>
                            <option value="none">회원유형</option>
                            <option value="1">일반회원</option>
                            <option value="2">강사</option>
                            <option value="3">관리자</option>
                        </select>
                   </div>
                   <button onClick={()=>handlerJoin()}>가입하기</button>
                </form>
            </div>
        );
    }
}

export default observer(UserJoinContainer);
