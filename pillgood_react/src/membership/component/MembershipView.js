import React, { Component } from 'react';

class MembershipView extends Component {
    render() {
       const {membership} = this.props;
        return(
            <div>
                ID: {membership.membership_id}
                <br />
                횟수 : {membership.number}회
                <br />
                기간 : {membership.period}일
                <br />
                가격 : {membership.price}원
                <br />
                유형 : {membership.type}
                <br />
                상태 : {membership.status}
                <br />
                <button onClick={()=>this.MembershipsStore.selectPay()}>결제</button>
                <br />
               
               
            </div>
        );
    }
}

export default MembershipView;