import { observer } from "mobx-react";
import React, { Component } from "react";
import PayListView from "../component/PayListView";
import PayStore from "../store/PayStore";

class PayListContainer extends Component {
    payStore = PayStore;

    componentDidMount() {}

    render() {
        const { pays } = this.payStore;

        const payList = pays.map((pay) => {
            return <PayListView key={pay.pay_id} pay={pay} />;
        });

        return (
            <div>
                <h3>멤버십 결제내역</h3>
                <table>
                    <thead>
                        <tr>
                            <th>결제일</th>
                            <th>유형</th>
                            <th>기간</th>
                            <th>총/잔여횟수</th>
                            <th>결제방식</th>
                            <th>가격</th>
                            <th>상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payList.length ? (
                            payList
                        ) : (
                            <tr>
                                <td colSpan='7'>멤버십 결제내역이 존재하지 않습니다.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default observer(PayListContainer);
