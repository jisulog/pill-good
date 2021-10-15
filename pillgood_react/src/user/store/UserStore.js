import { makeAutoObservable, runInAction } from "mobx";
import UserApi from "../api/UserApi";

class UserStore {
    user = {email:"",
            password:"",
            passwordCheck:"",
            name:"",
            phone:"",
            type:""};  // observable

    message = "";

    // userAPI = new UserApi();

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    // action part

    // 1. Join
    async handlerJoin() {

      if (this.email !== /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i) {
          this.message = `올바른 이메일 형식이 아닙니다.`
      }

      if (this.password !== /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/) {
        this.message = `비밀번호는 8자 이상이어야 하며, 숫자/소문자를 모두 포함해야 합니다.`
        }

      if (this.password !== this.passwordCheck) {
        this.message = `비밀번호가 일치하지 않습니다.`
        }

    const result = await UserApi.userJoin(this.user);
    console.log(result);
    }

    // 데이터 유효성 검사 확인 필요

    // 이메일 형식 검사 정규표현식
    // var emailreg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    // 비밀번호 소문자+숫자 포함 8자 이상 검사 정규표현식
    // var reg = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;


    // 2. Login
    async handlerLogin()  {
      const result = await UserApi.userLogin(this.user.email, this.user.password);
      }


    // 3. input att bind
    handlerSet = (name, value) => {
      this.user = {...this.user, [name]:value}
    }

}

export default new UserStore();
