import React, { Component } from 'react';
import {observer} from 'mobx-react';
import MembershipStore from "../store/MembershipStore";
import MembershipView from "../component/MembershipView";

class MembershipContainer extends Component {
    membershipStore = MembershipStore;

    componentDidMount() {
        this.membershipStore.selectMembershipAll();
    }
    render() {
        const {memberships} = this.membershipStore;
        const membershipList = memberships.map(membership =>{
            return <MembershipView key={membership.membership_id} membership = {membership} />  
        
            
        });
      
        return (
            <div>
                <h1>Membership Page</h1>
                <h3>One-on-One(1:1)</h3>
                {membershipList}
                <h3>Couple(1:2)</h3>
                {membershipList}
                <h3>Group(1:8)</h3>
                {membershipList}
                
            </div>
        );
    }
}

export default observer(MembershipContainer);