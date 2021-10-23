import React, { Component } from 'react';
import moment from "moment";

class ManagerUserPayDetailView extends Component {
  render() {
    const { pay } = this.props;
    return (
        <tr>
        <td>{moment(pay.pay_dat).format("YY.MM.DD")}</td>
                <td>{pay.membership_id.type === 1
                    ? "1인"
                    : pay.membership_id.type === 2
                    ? "2인"
                    : pay.membership_id.type === 3
                    ? "8인"
                    : "유형이 정확하지 않습니다."}</td>
                <td>{moment(pay.end_date).format("YY.MM.DD")}</td>
                <td>{pay.remain}회</td>
                <td>{pay.pay_type === 1 ? "신용카드" : "현금결제"}</td>
                <td>{pay.membership_id.price}원</td>
                <td>
                    {pay.status === 1
                        ? "결제"
                        : pay.status === 2
                        ? "환불"
                        : ""}
                </td>
                </tr>
    );
  }
}

export default ManagerUserPayDetailView;