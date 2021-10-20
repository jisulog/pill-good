import { makeAutoObservable, runInAction } from "mobx";
import MemberApi from "../api/MemberApi";

class PayStore {
    pays = [];
    pay = {
        pay_id: 0,
        pay_type: 0,
        remain: 0,
        pay_date: "",
        end_date: "",
        membership_id: {
            membership_id: 0,
            number: 0,
            price: 0,
            type: 0,
        },
        status: 0,
    };
    message = "";
    period = 0;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    async selectMember(id) {
        try {
            const result = await MemberApi.payList(id);

            runInAction(() => {
                this.pays = result;
            });
        } catch (error) {
            runInAction(() => (this.message = error.message));
        }
    }
}

export default new PayStore();
