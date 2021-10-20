import { makeAutoObservable, runInAction } from "mobx";
import lecApi from "../api/LecApi";

class LecStore {
    lec = {lec_id :"", title:"",content:"", room :"", date: "", time:"", level:"", email:"", number:"", status :1};
    lecs = [];
    message = "";
    book = {book_id:"", email:"", lec_id:"", status:"1"};

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }



//action 

    async selectLec(id) {
        try{
          const result = await lecApi.lecDetail(id);
          runInAction(() => {this.lec = result;
        });
        }catch(error){
          this.message = error.message}
      }
      
    //전체 강의 목록  
    async selectAll() {
        try {
            const result = await lecApi.lecList();
            // console.log(result)
            runInAction(() => {this.lecs = result;
                 console.log(this.lecs)
            });
        } catch(error) {
            runInAction(() => (this.message = error.message));
        }
    }
    setBookProps(name, value){
    this.book = {...this.book, [name]:value}
  }
  setDateProps(value){
    alert('해당 날짜에는 예약이 불가능합니다!')
  }
    //강의 예약
    async createBook() {
      try{
        await lecApi.bookCreate(this.lec.email, this.lec.lec_id, this.lec.status)
      }catch(error){
        console.log(error);

      }
    }
}

export default new LecStore();