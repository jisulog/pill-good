import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import moment from "moment";
import MemberPayRefundPage from "../pages/MemberPayRefundPage";

class PayListView extends Component {
    render() {
        const { pay } = this.props;

        let end_date = `${pay.end_date}`;
        
        return (
            <tr>
                <td>{moment(pay.pay_date).format("YYYY-MM-DD")}</td>
                <td>{pay.membership_id.type === 1
                    ? "1대1"
                    : pay.membership_id.type === 2
                    ? "1대2"
                    : pay.membership_id.type === 8
                    ? "1대8"
                    : "유형이 정확하지 않습니다."}</td>
                <td>
                    {moment(pay.pay_date).format("YYYY-MM-DD")}~{pay.end_date}
                </td>
                <td>
                    {pay.membership_id.number} / {pay.remain}
                </td>
                <td>{pay.pay_type === 1 ? "신용카드" : "현금결제"}</td>
                <td>{pay.price}</td>
                <td>
                    {pay.status === 1
                        ? "정상결제"
                        : pay.status === 2
                        ? "환불"
                        : "에러"}

                    {pay.status === 1 &&
                    pay.membership_id.number === pay.remain &&
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
