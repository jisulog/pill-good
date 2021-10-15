import { makeAutoObservable, runInAction } from "mobx";
import instructorApi from "../api/InstructorApi";
// import lecApi from "../api/LecApi";

class InstructorStore{
  lec = {lec_id :"", "title":"",content:"", room :"", date: "", time:"", level:"", email:"", number:"", status :1};
  lecs = []; 
  filterText ="";
  users =[];
 
  constructor(){
    makeAutoObservable(this, {}, { autoBind: true })
  }
  
    //action
    // async selectBook(book) {
    //   try{
    //     const result = await bookApi.bookDetail(book.id);
    //     runInAction(()=> this.book = result);
    //     console.log(this.book, result);
    //   }catch(error){
    //     console.log(error);
    //   }
    // // }

    async selectAllUser(){
      try{
        const result = await instructorApi.userList();
        runInAction(()=> this.users = result);
        console.log(result);
      }catch(error){
        console.log(error);
        runInAction(()=> this.message = error.message);
      }
    }

    async selectAllLec(){
      try{
        const result = await instructorApi.allLecList();
        runInAction(()=> this.lecs = result);
        console.log(result);
      }catch(error){
        console.log(error);
        runInAction(()=> this.message = error.message);
      }
    }
    
    handlerFilterTextChange = (filterText) => {
      this.filterText = filterText;
    }

    // async handlerRemove() {
    //   try{
    //    await lecApi.bookDelete(this.book.id);
    //    this.selectAll();
    //   }catch(error){
    //     console.log(error);
    //     this.mesaage = error.message; 
    //   }
    
    //    this.init();
    //   }
  
    async handlerModify() {
      try{
        await instructorApi.bookUpdate(this.lec.lec_id, this.lec.title)
        this.selectAll();
      }catch(error){this.mesaage = error.message;
      }
  
      this.init();
    }
  // handlerAdd = () => {
  //   this.lecs = this.lec.concat(this.lec);
    
  // }
    async handlerAdd() {
      try{
        await instructorApi.lecCreate(this.lec);
        this.selectAll();
        console.log(this.lec)        
      }catch(error){
        console.log(error);
        runInAction(this.message = error.message);
      }
      this.init();
    }
    init = () => {
      this.lec= {lec_id: "", title: "", content:"", room:"", price:"", date: "", time:"", level:"", email:"", number:"", stauts:""};
    }
    
    handlerSetProps = (name, value) =>{
      this.lec = {...this.lec, [name]: value} 
      console.log(this.lec)
  }
}
export default new InstructorStore();