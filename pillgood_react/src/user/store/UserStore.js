import { makeAutoObservable, runInAction } from "mobx";
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
    async handlerJoin() {
      await UserApi.userJoin(this.user);    
    }

    // 데이터 유효성 검사 확인 필요

    // 이메일 형식 검사 정규표현식
    // var emailreg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    // 비밀번호 소문자+숫자 포함 8자 이상 검사 정규표현식
    // var reg = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;


    // 2. Login
    async handlerLogin() {
      console.log("handlerlogin");
      try{
        
        const result = await UserApi.userLogin(this.user.email, this.user.password);
        //   runInAction(() => {this.user = result;
        //     console.log(result);
        //     console.log('request.data')
        //     localStorage.setItem('request.data.email');
        //     console.log('request.data.email');
        // });
        console.log("loginresult", result);
        window.localStorage.setItem('email', result.email);
        window.localStorage.setItem('id', result.id);
        window.sessionStorage.setItem('email', result.email);
        window.sessionStorage.setItem('id', result.id);
      }catch(error){
        console.log(error)
      this.message = `아이디 또는 비밀번호가 잘못 입력되었습니다.`
      }

      // 백단 데이터 받아와서 email부분만 localStorage.setItem 저장!
    }


    // 3. Logout
    handlerLogout() {
      window.localStorage.clear();
      window.sessionStorage.clear();

      // localStorage.removeItem();
    }


    // 4. input att bind
    handlerSet = (name, value) => {
      this.user = {...this.user, [name]:value}
    }

}

export default new UserStore();
