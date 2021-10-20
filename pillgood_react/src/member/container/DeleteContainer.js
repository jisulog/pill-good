import { observer } from "mobx-react";
import React, { Component } from "react";
import DeleteView from "../component/DeleteView";
import MemberStore from "../store/MemberStore";
import PayStore from "../store/PayStore";

class DeleteContainer extends Component {
    memberStore = MemberStore;
    payStore = PayStore;

    componentDidMount() {
        this.memberStore.selectMember(1);
    }

    render() {
        const { pay, period } = this.payStore;
        return (
            <div>
                <DeleteView pay={pay} period={period} />
            </div>
        );
    }
}

export default observer(DeleteContainer);
