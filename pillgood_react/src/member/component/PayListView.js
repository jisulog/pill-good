import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Moment from "react-moment";
import MemberPayRefundPage from "../pages/MemberPayRefundPage";

class PayListView extends Component {
    render() {
        const { pay } = this.props;

        let end_date = `${pay.end_date}`;
        
        return (
            <tr>
                <td>{pay.pay_date}</td>
                <td>{pay.membership_id.type === 1
                    ? "1대1"
                    : pay.membership_id.type === 2
                    ? "1대2"
                    : pay.membership_id.type === 3
                    ? "1대8"
                    : "유형이 정확하지 않습니다."}</td>
                <td>
                    <Moment format="YYYY-MM-DD">{pay.pay_date}</Moment>~{" "}
                    {pay.end_date}
                </td>
                <td>
                    {pay.membership_id.period} / {pay.remain}
                </td>
                <td>{pay.pay_type === 1 ? "신용카드" : "현금결제"}</td>
                <td>{pay.price}</td>
                <td>
                    {pay.status === 1
                        ? "정상결제"
                        : pay.status === 2
                        ? "환불신청"
                        : "환불완료"}

                    {pay.status === 1 &&
                    // pay.membership_id.period === pay.remain &&
                    pay.remain > 0 ? (
                        <Link
                            // to={`/member/refund/${pay.pay_id}`}
                            to={{
                                pathname: `/member/refund/${pay.pay_id}`,
                                state: {
                                    pay_id: pay.pay_id,
                                },
                            }}
                        >
                            환불
                        </Link>
                    ) : (
                        ""
                    )}
                </td>

                <Route
                    exact
                    path="/member/refund/:id"
                    component={MemberPayRefundPage}
                />
            </tr>
        );
    }
}

export default PayListView;
