import {makeAutoObservable, runInAction} from "mobx";
import moment from "moment";
import membershipApi from "../api/MembershipApi";

class MembershipStore {
    membership = {membership_id: 1, number: 0, period: 0, price: 0, type: 0, status: 0};
    memberships = [];
    message = "";

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    
    // 멤버십 목록보기
    async selectMembershipAll() {
        try {
            const result = await membershipApi.membershipAll();
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
    async Pay(user) {
        try {
            let end_date = moment().format("YYYY-MM-DD").add(this.membership.period,"days")
            await membershipApi.Pay(user, 1, this.membership.number, end_date, this.membership.membership_id,1);

        } catch (error) {
            console.log(error);
        }
    }

    async setmembership(membership_id){
        try {
            const result = await membershipApi.membership(membership_id);
            console.log(result)

            runInAction(() => {
                this.membership = result;
                console.log(this.membership)
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export default new MembershipStore();