import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

class PayListView extends Component {
    render() {
        const { pay } = this.props;

        let end_date = `${pay.end_date}`;
        
        return (
            <tr>
                <td>{pay.pay_date}</td>
                <td>{pay.type}</td>
                <td>
                    <Moment format="YYYY-MM-DD">{pay.pay_date}</Moment> 
                    ~ {pay.end_date}
                </td>
                <td>
                    {pay.number} / {pay.remain}
                </td>
                <td>{pay.pay_type}</td>
                <td>{pay.price}</td>
                <td>
                    {pay.status === 1
                        ? "정상결제"
                        : pay.status === 2
                        ? "환불신청"
                        : "환불완료"}

                    {pay.status === 1 && pay.remain > 0 ? (
                        <Link to="/member/paylist/refund">환불</Link>
                    ) : (
                        ""
                    )}
                </td>
            </tr>
        );
    }
}

export default PayListView;
