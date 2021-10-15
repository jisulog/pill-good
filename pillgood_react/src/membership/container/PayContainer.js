import React, { Component } from 'react';
import { observer } from 'mobx-react';
import MembershipStore from '../store/MembershipStore';
import PayView from '../component/PayView';

class PayContainer extends Component {
    membershipStore = MembershipStore;

    componentDidMount() {
        this.membershipStore.selectPay();
    }
    render() {
        const {pay} = this.membershipStore;
        return (
            <div>
                <h1>Pay Page</h1>
                <PayView pay={pay} />
            </div>
        );
    }
}

export default observer(PayContainer);