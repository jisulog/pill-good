import { makeAutoObservable, runInAction } from "mobx";
import InstructorApi from "../api/InstructorApi";

class InstructorStore{
  lec = {lec_id :"", "title":"",content:"", image:"", room :"", date: "", time:"", level:"", email:"", number:"", status :1};
//lec={};
  lecs = [];
  users =[];


  constructor(){
    makeAutoObservable(this, {}, { autoBind: true })
  }
  
   
    handlerSetProps = (id, value) =>{
      this.lec = {...this.lec, [id]: value} 
  }
  
    async selectAllUser(id){
      try{
        const result = await InstructorApi.userList(id);
        console.log("store")
        runInAction(()=> this.users = result);
        console.log(result);
      }catch(error){
        console.log(error);
        runInAction(()=> this.message = error.message);
      }
    }

    async selectAllLec(){
      try{
        const result = await InstructorApi.lecList();
        runInAction(()=> {this.lecs = result;
            console.log(result)
      });
      }catch(error){
        console.log(error);
        runInAction(()=> this.message = error.message);
      }
    }

     async selectLec(id) {
        try{
          const result = await InstructorApi.lecDetail(id);
          runInAction(() => this.lec = result);
           console.log(result)
           }catch(error){
         console.log(error);
          }
      }


    
    async createLec() {
      try{
        await InstructorApi.lecCreate(this.lec.title, this.lec.content,  this.lec.image, this.lec.room, this.lec.date, this.lec.time, this.lec.level, this.lec.email,  this.lec.number, this.lec.status)
      }catch(error){
        console.log(error);
        
      }
    } 
    
    async updateLec() {
      try {
        await InstructorApi.lecUpdate(this.lec.lec_id, this.lec.title, this.lec.content, this.lec.image, this.lec.room, this.lec.date, this.lec.time, this.lec.level, this.lec.email,  this.lec.number, this.lec.status);
      } catch (error) {
        console.log(error);
      }
    }
  }
export default new InstructorStore();