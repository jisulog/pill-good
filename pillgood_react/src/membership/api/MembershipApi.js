import axios from "axios";

class MembershipApi {
    URL = "/membership/";

    // 'membership' [GET]
    membership() {
        return axios
            .get(this.URL)
            .then((response) => response.data);
    }

    // 'membership/pay' [POST]
    membershipPay(pay) {
        return axios
            .post(this.URL + `pay/`, {
                pay_id: `${pay.pay_id}`,
                email: `${pay.email}`,
                pay_type: `${pay.pay_type}`,
                remain: `${pay.remain}`,
                end_date: `${pay.end_date}`,
                membership_id: `${pay.membership_id}`,
                status: `${pay.status}`
            })
            .then((response) => response.data);
    }
}

export default new MembershipApi();