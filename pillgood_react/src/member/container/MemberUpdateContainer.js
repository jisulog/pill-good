import { observer } from "mobx-react";
import React, { Component } from "react";
import MemberUpdateView from "../component/MemberUpdateView";
import MemberStore from "../store/MemberStore";
import Bucket from "../../image/Bucket";

class MemberUpdateContainer extends Component {
    memberStore = MemberStore;

    componentDidMount() {
        let user = window.localStorage.getItem("id");
        user = 1;

        this.memberStore.selectMember(user);
    }

    render() {
        const { member, handlerSetProps, updateMember } = this.memberStore;
        return (
            <div>
                <Bucket />
                <MemberUpdateView
                    member={member}
                    onSetProps={handlerSetProps}
                    onUpdate={updateMember}
                />
            </div>
        );
    }
}

export default observer(MemberUpdateContainer);
