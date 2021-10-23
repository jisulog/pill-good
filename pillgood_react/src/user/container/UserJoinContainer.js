import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import {observer} from 'mobx-react';
import UserStore from "../store/UserStore";
import '../user.css';


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
                               onChange={(e)=>{handlerSet(e.target.name, e.target.value)}}/>
                    </div>
                    <div>
                        <label>비밀번호 : </label>
                        <input type="password"
                               name="password"       
                               placeholder="영문자, 숫자 포함 8자 이상 입력"   
                               onChange={(e)=>{passwordEquivCheck(e.target.name, e.target.value);
                                               handlerSet(e.target.name, e.target.value)}}/>
                    </div>
                    <div>
                        <label>비밀번호 재확인 : </label>
                        <input type="password"
                               name="checkPassword"                              
                               onChange={(e)=>{passwordEquivCheck(e.target.name, e.target.value);
                                               handlerSet(e.target.name, e.target.value)}}/>
                        <span>
                            <span id="checkTrue" className="blue-color hidden">
                                비밀번호가 일치합니다.
                            </span>
                            <span id="checkFalse" className="red-color hidden">
                                비밀번호가 일치하지 않습니다.
                            </span>
                        </span>
                    </div>
                    <div>
                        <label>이름 : </label>
                        <input type="text"
                               name="name"                               
                               onChange={(e)=>
                                handlerSet(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <label>연락처 : </label>
                        <input type="text"
                               name="phone"
                               placeholder="000-0000-0000"                               
                               onChange={(e)=>{handlerSet(e.target.name, e.target.value)}}/>
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
                     <input type="button" onClick={()=>handlerJoin(check)} value="가입하기"/>
                </form>
            </div>
        );
    }
}

let password = "";
let checkPassword = "";
let check = "";

const passwordEquivCheck = (name, value) => {
    const checkTrue = document.querySelector("#checkTrue");
    const checkFalse = document.querySelector("#checkFalse");

    if (name === "password") {
        password = value;
    } 
    else if (name === "checkPassword") {
        checkPassword = value;
    }

    if (password === "" || checkPassword === "") {
        checkTrue.classList.add("hidden");
        checkFalse.classList.add("hidden");
        check = "no";
    } 
    else if (password === checkPassword) {
        checkTrue.classList.remove("hidden");
        checkFalse.classList.add("hidden");
        check = "okay";
    } 
    else {
        checkTrue.classList.add("hidden");
        checkFalse.classList.remove("hidden");
        check = "no";
    }

};

export default observer(UserJoinContainer);

  
