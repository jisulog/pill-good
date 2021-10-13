import React, { Component } from "react";
import {observer} from 'mobx-react';
import MemberStore from "../store/MemberStore";
import MemberView from "../component/MemberView";

class MemberContainer extends Component {
    memberStore = MemberStore;

    componentDidMount() {
        this.memberStore.selectMember();
    }

    render() {
        const { member } = this.memberStore;
        return (
            <div>
                <MemberView member={member} />
            </div>
        );
    }
}

export default observer(MemberContainer);
