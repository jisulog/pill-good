import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {observer} from 'mobx-react';
import UserStore from "../store/UserStore";


class UserJoinContainer extends Component {
    userStore = UserStore;

    // componentDidMount() {};

    render() {
        const {handlerSet, handlerJoin} = this.userStore; 

        return (
            <div>
                <h1>Sign-Up Page</h1>
                <form>
                    <div>
                        <label>이메일 : </label>
                        <input type="email"
                               name="email"                                               
                               onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
                        {
                        `email` !== /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2, 3}$/i
                        ? <p/>
                        : <p>올바른 이메일 형식으로 입력해주세요</p>
                        }
                    </div>
                    <div>
                        <label>비밀번호 : </label>
                        <input type="password"
                               name="password"                               
                               onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <label>비밀번호 재확인 : </label>
                        <input type="password"
                               name="passwordCheck"                              
                               onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <label>이름 : </label>
                        <input type="text"
                               name="name"                               
                               onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <label>연락처 : </label>
                        <input type="text"
                               name="phone"                               
                               onChange={(e)=>handlerSet(e.target.name, e.target.value)}/>
                   </div>
                   <div>
                        <label>회원유형 : </label>
                        <select name="type" onChange={(e)=>handlerSet(e.target.name, e.target.value)}>
                            <option value="none">회원유형</option>
                            <option value="1">일반회원</option>
                            <option value="2">강사</option>
                            <option value="3">관리자</option>
                        </select>
                   </div>
                   {/* link event안으로 변경하기 */}
                   {/* <Link to="/user/login">   */}
                     <input type="submit" onClick={()=>handlerJoin()} value="가입하기"/>
                   {/* </Link> */}
                </form>
            </div>
        );
    }
}

export default observer(UserJoinContainer);

// try{
//     if (this.email !== /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i) {
//         this.message = `올바른 이메일 형식이 아닙니다.`
//     }

//     if (this.password !== /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/) {
//       this.message = `비밀번호는 8자 이상이어야 하며, 숫자/소문자를 모두 포함해야 합니다.`
//       }

//     if (this.password !== this.passwordCheck) {
//       this.message = `비밀번호가 일치하지 않습니다.`
//       }
    

//     await UserApi.userJoin(this.user);
//     }

//     catch(error) {
//     console.log(error.message); 
//     }
  
