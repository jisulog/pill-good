import React, { Component } from "react";
import { observer } from "mobx-react";
import MemberStore from "../store/MemberStore";
import MemberView from "../component/MemberView";

class MemberContainer extends Component {
    memberStore = MemberStore;

    componentDidMount() {
        let user = window.localStorage.getItem("id");
        if (user === "" || user === null) {
            user = 1;
        }

        this.memberStore.selectMember(user);
    }

    render() {
        const { member, handleFileInput } = this.memberStore;
        return (
            <div>
                <MemberView member={member} onFileInput={handleFileInput}/>
            </div>
        );
    }
}

export default observer(MemberContainer);
