import {makeAutoObservable, runInAction} from "mobx";
import membershipApi from "../api/MembershipApi";

class MembershipStore {
    membership = {membership_id: 1, number: 0, period: 0, price: 0, type: 0, status: 0};
    memberships = [];
    pay = {pay_id: 1, email: "", pay_type: 1, remain: 0, end_date: "", membership_id: 0, status: 0}
    message = "";

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    // 멤버십 목록보기
    async selectMembershipAll() {
        try {
            const result = await membershipApi.membership();
            console.log(result)

            runInAction(() => {
                this.memberships = result;
                console.log(this.memberships)
            });
        } catch (error) {
            console.log(error);
        }
    }
    // 결제하기
    async selectPay(pay) {
        try {
            const result = await membershipApi.Pay(pay.pay_id);
            runInAction(() => this.pay = result);
        } catch (error) {
            console.log(error);
        }
    }

}

export default new MembershipStore();