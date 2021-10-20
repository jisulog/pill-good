import { observer } from "mobx-react";
import React, { Component } from "react";
import PayRefundView from "../component/PayRefundView";
import PayStore from "../store/PayStore";
import MemberStore from "../store/MemberStore";

class PayRefundContainer extends Component {
    payStore = PayStore;
    memberStore = MemberStore;

    componentDidMount() {}

    render() {
        const { pay } = this.payStore;
        const { member } = this.memberStore;
        return (
            <div>
                <PayRefundView pay={pay} member={member} />
            </div>
        );
    }
}

export default observer(PayRefundContainer);
