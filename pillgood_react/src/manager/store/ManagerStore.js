import { makeAutoObservable, runInAction } from "mobx";
import ManagerApi from "../api/ManagerApi";


class ManagerStore {
  user = {};
  users = [];

  lec = {};
  lecs = [];

  membership = {};
  memberships = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }


  // action - user
  setUserProps(id, value){
    this.user = {...this.user, [id]:value}
  }

  async selectUserAll() {
    try {
      const results = await ManagerApi.userList();
      runInAction(() => this.users = results);
    } catch (error) {
      console.log(error);
    }
  }

  async selectUser(id) {
    try {
      const result = await ManagerApi.userDetail(id);
      runInAction(() => this.user = result);
    } catch (error) {
      console.log(error);
    }
  }

  async accessUser(){
    try{
      await ManagerApi.userAccess(this.user.id, this.user.type);
      this.selectUserAll();
    }catch(error){
      runInAction(this.message = error.message);
    }
  }

  

  // action - lec
  setLecProps(id, value){
    this.lec = {...this.lec, [id]:value}
  }

  async selectLecAll() {
    try {
      const results = await ManagerApi.lecList();
      runInAction(() => this.lecs = results);
      console.log("success");
    } catch (error) {
      console.log(error);
    }
  }

  async selectLec(id) {
    try {
      const result = await ManagerApi.lecDetail(id);
      runInAction(() => this.lec = result);
    } catch (error) {
      console.log(error);
    }
  }

  async updateLec() {
    try {
      await ManagerApi.lecUpdate(this.lec.lec_id, this.lec.title, this.lec.content, this.lec.room,
        this.lec.date, this.lec.time, this.lec.level, this.lec.number, this.lec.status);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteLec() {
    try {
      await ManagerApi.lecDelete(this.lec.lec_id);
    } catch (error) {
      console.log(error);
    }
  }

  // action - membership
  setMembershipProps(id, value){
    this.membership = {...this.membership, [id]:value}
  }

  async selectMembershipAll() {
    try {
      const results = await ManagerApi.membershipList();
      runInAction(() => this.memberships = results);
      console.log("success");
    } catch (error) {
      console.log(error);
    }
  }

  async createMembership() {
    try {
      await ManagerApi.membershipCreate(this.membership.number, this.membership.period, this.membership.price, this.membership.type, this.membership.status)
    } catch (error) {
      console.log(error);
    }
  }

  



}

export default new ManagerStore();