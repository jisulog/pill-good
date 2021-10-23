import { makeAutoObservable } from "mobx";
import UserApi from "../api/UserApi";

class UserStore {
    user = {email:"",
            password:"",
            name:"",
            phone:"",
            type:""};  // observable
    users = [];

    message = "";

    // userAPI = new UserApi();

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }


    // action part

    // 1. Join
    async handlerJoin(check) {
      if (check !== "okay") {
        return alert("비밀번호가 일치하지 않습니다.")
      }
      const result = await UserApi.userJoin(this.user);
      alert(result.message);
    
    }




    // 2. Login
    async handlerLogin() {
      const result = await UserApi.userLogin(this.user.email, this.user.password);
      alert(result.message);
      
      window.localStorage.setItem('email', result.email);
      window.localStorage.setItem('id', result.id);
      window.localStorage.setItem('email', result.is_admin);
      window.sessionStorage.setItem('email', result.email);
      window.sessionStorage.setItem('id', result.id);
      window.sessionStorage.setItem('email', result.is_admin);
    }


    // 3. Logout
    handlerLogout() {
      window.localStorage.clear();
      window.sessionStorage.clear();
    }


    // 4. input att bind
    handlerSet = (name, value) => {
      this.user = {...this.user, [name]:value}
      
    }
}

export default new UserStore();
