import React, {Component} from 'react';

class MembershipView extends Component {
    render() {
        const {membership, user, pay} = this.props;
        return (
            <div>
                <p>
                    <span>Membership{membership.membership_id}</span><br/>
                    유형 : {membership.type === 1
                            ? "1대1"
                            : membership.type === 2
                            ? "1대2"
                            : membership.type === 3
                            ? "1대8"
                            : "유형이 정확하지 않습니다."}<br/>
                    회수 : {membership.number}회<br/>
                    기간 : {membership.period}일<br/>
                    가격 : {membership.price}원<br/>
                    상태 : {membership.status}<br/>
                    <button onClick={() => pay(`${user}`)}>결제</button>
                    <br/>
                </p>
            </div>
        );
    }
}

export default MembershipView;