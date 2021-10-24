import { makeAutoObservable, runInAction } from "mobx";
import InstructorApi from "../api/InstructorApi";

class InstructorStore{
  lec = {lec_id :"", "title":"",content:"", image:"", room :"", date: "", time:"", level:"", email:"", number:"", status :1};
  selectedFile = null;
//lec={};
  lecs = [];
  users =[];



  constructor(){
    makeAutoObservable(this, {}, { autoBind: true })
  }

    handlerSetProps = (name, value) =>{
      this.lec = {...this.lec, [name]: value}
  }

    handlerSetFile(e) {
    this.selectedFile = e.target.files[0];
    }   //file 업로드

    async selectAllUser(lec_id){
      try{
        const result = await InstructorApi.userList(lec_id);
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
          runInAction(() => this.lecs = result);
           console.log(result)
           }catch(error){
         console.log(error);
          }
      }


    async instructorLec(id) {
        try{
          const result = await InstructorApi.lecList(id);
          runInAction(() => this.lecs = result);
           console.log(result)
           }catch(error){
         console.log(error);
          }
      }

    async createLec() {
      try{
        if (this.selectedFile != null){
            await InstructorApi.imageUpdate(this.selectedFile);
            }
        await InstructorApi.lecCreate(
        this.lec.title,
        this.lec.content,
        this.lec.image,
        this.lec.room,
        this.lec.date,
        this.lec.time,
        this.lec.level,
        this.lec.email,
        this.lec.number,
        this.lec.status)
      }catch(error){
        console.log(error);
        
      }
    } 
    
    async updateLec() {
      try {
        await InstructorApi.lecUpdate(this.lec.lec_id, this.lec.title, this.lec.content, this.lec.image, this.lec.room, this.lec.date, this.lec.time, this.lec.level, this.lec.email, this.lec_count, this.lec.number, this.lec.status);
      } catch (error) {
        console.log(error);
      }
    }
  }
export default new InstructorStore();