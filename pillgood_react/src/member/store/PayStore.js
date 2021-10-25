import { makeAutoObservable, runInAction } from "mobx";
import MemberApi from "../api/MemberApi";
import moment from 'moment';

class PayStore {
    pays = [];
    pay = {
        pay_id: 0,
        pay_type: 0,
        remain: 0,
        pay_date: "",
        end_date: "",
        membership_id: 0,
        status: 0,
    };
    message = "";
    period = 0;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    payInit(){
        this.pay = {
            pay_id: 0,
            pay_type: 0,
            remain: 0,
            pay_date: "",
            end_date: "",
            membership_id: 0,
            status: 0,
        };        
    }

    async selectMember(id) {
        try {
            const result = await MemberApi.payList(id);

            runInAction(() => {
                this.pays = result;
                this.todayPayUpdate();
            });
        } catch (error) {
            runInAction(() => (this.message = error.message));
        }
    }

    async todayPayUpdate(){
        for(var i=0; i<this.pays.length;i++) {
            this.pay = this.pays[i];
            if (this.pay.end_date < moment().format("YYYY-MM-DD")) {
                this.pay.status = 3;
                await MemberApi.payRefund(
                    this.pay.pay_id,
                    this.pay.pay_type,
                    this.pay.remain,
                    this.pay.pay_date,
                    this.pay.end_date,
                    this.pay.membership_id,
                    this.pay.status,
                );
            }
        }

    }

    async selectPay(payId) {
        try {
            const result = await MemberApi.payDetail(payId);

            runInAction(() => {
                this.pay = result;
            });
        } catch (error) {
            runInAction(() => (this.message = error.message));
        }
    }

    async refundPay() {
        try {
            this.pay.status = 2;
            await MemberApi.payRefund(
                this.pay.pay_id,
                this.pay.pay_type,
                this.pay.remain,
                this.pay.pay_date,
                this.pay.end_date,
                this.pay.membership_id,
                this.pay.status,
            );

            runInAction(() => {
                this.selectPay(this.pay.pay_id);
                window.location.replace("/member/paylist");
            });
        } catch (error) {
            runInAction(() => (this.message = error.message));
        }        
    }

}

export default new PayStore();
