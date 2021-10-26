import React, { Component } from 'react';
import { observer } from 'mobx-react'
import QnaCreateView from '../component/QnaCreateView';
import QnaStore from '../store/QnaStore';
import MemberStore from '../../member/store/MemberStore';

class QnaCreateContainer extends Component {
    qnaStore = QnaStore;
    memberStore = MemberStore;

    componentDidMount() {
        let user = window.localStorage.getItem("id");
        user = 1; //임시
        this.memberStore.selectMember(user);
    }
    render() {
        const {handlerSet, createQna} = this.qnaStore;
        const {member} = this.memberStore;
        return (
            <div>
                <h2 style={{textAlign:'center', color:'#574934'}} >QnA Create</h2>
                <QnaCreateView onsetprops = {handlerSet} oncreate = {createQna} member={member}/>
            </div>
        );
    }
}

export default observer(QnaCreateContainer);