import { makeAutoObservable, runInAction } from "mobx";
import memberApi from "../api/MemberApi";

class MemberStore {
    member = {};
    message = "";

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    async selectMember() {
        try {
            const result = await memberApi.member();
            console.log(result)

            runInAction(() => {
                this.member = result;
                console.log(this.member)
            });
        } catch (error) {
            runInAction(() => (this.message = error.message));
        }
    }
}

export default new MemberStore();