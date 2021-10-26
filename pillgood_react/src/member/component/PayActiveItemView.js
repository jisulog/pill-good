import React, { Component } from "react";
import moment from 'moment';
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

class PayActiveItemView extends Component {
    render() {
        const { pay } = this.props;

        return (
            <Card sx={{ width: 400 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {pay.membership_id.type === 1
                            ? "1대1"
                            : pay.membership_id.type === 2
                            ? "1대2"
                            : pay.membership_id.type === 8
                            ? "1대8"
                            : "유형이 정확하지 않습니다."}{" "}
                        수업 이용권
                    </Typography>
                    <br/>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {moment(pay.pay_date).format("YYYY-MM-DD")} ~{" "}
                        {pay.end_date} (잔여{" "}
                        {moment(pay.end_date).diff(moment(), "days")}일)
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {pay.membership_id.number}회 중 {pay.remain} 회 남음
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default PayActiveItemView;
