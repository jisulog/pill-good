import { observer } from 'mobx-react';
import React, { Component } from 'react';
import PasswordUpdateView from '../component/PasswordUpdateView';
import MemberStore from '../store/MemberStore';

class PasswordUpdateContainer extends Component {
    memberStore = MemberStore;

    componentDidMount() {
        // 회원 아이디 가져오기
        this.memberStore.selectMember(1);
    } 
       
    render() {
        const {member} = this.memberStore; 
        return (
            <div>
                <PasswordUpdateView member={member}/>
            </div>
        );
    }
}

export default observer(PasswordUpdateContainer);