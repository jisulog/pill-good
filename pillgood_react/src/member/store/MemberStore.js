import { makeAutoObservable, runInAction } from "mobx";
import memberApi from "../api/MemberApi";

class MemberStore {
    member = {
        id: 0,
        password: "",
        name: "",
        phone: "",
        intro: "",
        image: "",
        formData: null,
        type: 0,
        is_active: 0,
    };
    message = "";

    oldPassword = "";
    newPassword = "";

    // selectedFile = null;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    init() {
        this.member = {
            id: 0,
            password: "",
            name: "",
            phone: "",
            intro: "",
            image: "",
            type: 0,
            is_active: 0,
        };
    }

    handlerSetProps(name, value) {
        this.member = { ...this.member, [name]: value };
    }

    handlerOldPassword(password) {
        this.oldPassword = password;
    }

    handlerNewPassword(password) {
        this.newPassword = password;
    }

    async selectMember(id) {
        try {
            const result = await memberApi.member(id);

            runInAction(() => {
                this.member = result;
            });
        } catch (error) {
            runInAction(() => (this.message = error.message));
        }
    }

    async updateMember() {
        try {
            // if (this.selectedFile != null) {
            //     this.handlePost();
            // }
            await memberApi.memberUpdate(
                this.member.id,
                this.member.password,
                this.member.name,
                this.member.phone,
                this.member.intro,
                this.member.image,
                this.member.type,
                this.member.is_active
            );

            runInAction(() => {
                this.selectMember(this.member.id);
                window.location.replace("/member");
            });
        } catch (error) {
            runInAction((this.message = error.message));
        }
    }

    // image upload start
    // handleFileInput(e) {
    //     this.setState({
    //         selectedFile: e.target.files[0],
    //     });
    // }

    // handlePost() {
    //     try {
    //         const formData = new FormData();
    //         formData.append("file", this.state.selectedFile);

    //         runInAction(() => {
    //             this.selectedFile = null;
    //         });
    //     } catch (error) {
    //         runInAction((this.message = error.message));
    //     }
    // }
    // image upload end
}

export default new MemberStore();
