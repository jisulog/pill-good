import React, { Component } from 'react';

class PayView extends Component {
    render() {
       const {pay} = this.props;
        return(
            <div>
                {pay.pay_id}
                <br />
                {pay.email}
                <br />
                {pay.pay_type}
                <br />
                {pay.remain}
                <br />
                {pay.end_date}
                <br />
                {pay.memebership_id}
                <br />
                {pay.status}
            </div>
        );
    }
}

export default PayView;