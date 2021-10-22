import React, { Component } from "react";

class PayActiveItemView extends Component {
    render() {
        const { pay } = this.props;

        return (
            <div>
                <dl>
                    <dt>유형</dt>
                    <dd>
                        {pay.membership_id.type === 1
                            ? "1대1"
                            : pay.membership_id.type === 2
                            ? "1대2"
                            : pay.membership_id.type === 3
                            ? "1대8"
                            : "유형이 정확하지 않습니다."}
                    </dd>
                </dl>
                <dl>
                    <dt>기간</dt>
                    <dd>
                        {pay.pay_date} ~ {pay.end_date}
                    </dd>
                </dl>
                <dl>
                    <dt>횟수</dt>
                    <dd>
                        {pay.membership_id.period}회 중 {pay.remain} 회 남음
                    </dd>
                </dl>
            </div>
        );
    }
}

export default PayActiveItemView;
