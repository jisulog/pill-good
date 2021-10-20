import React, { Component } from 'react';

class PayRefundView extends Component {
    render() {
        const {pay, member, refundRequest} = this.props;
        return (
            <div>
                <h2>결제 내역</h2>
                <dl>
                    <dd>이름</dd>
                    <dt>{member.name}</dt>
                </dl>
                <dl>
                    <dd>유형</dd>
                    <dt>{pay.type}</dt>
                </dl>
                <dl>
                    <dd>기간</dd>
                    <dt>{pay.pay_date} ~ {pay.end_date}</dt>
                </dl>
                <dl>
                    <dd>환불금액</dd>
                    <dt>{pay.price}</dt>
                </dl>
                <dl>
                    <dd>결제일자</dd>
                    <dt>{pay.pay_date}</dt>
                </dl>
                <dl>
                    <dd>결제방식</dd>
                    <dt>{pay.pay_type === 1 ? "신용카드" : "현금결제"}</dt>
                </dl>

                <input type="button" value="환불" onClick={(e)=>refundRequest()}/>
            </div>
        );
    }
}

export default PayRefundView;