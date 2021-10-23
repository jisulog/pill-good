import { makeAutoObservable, runInAction } from "mobx";
import lecApi from "../api/LecApi";

class LecStore {
    lec = {lec_id :"", title:"",content:"", room :"", date: "", time:"", level:"", email:"", number:"", status :1};
    lecs = [];

    message = "";

    book = {book_id:"", email:"" , lec_id:"", status:"1"};
    books =[];

    user = {};
    page: 1;

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

     handlePageChange(page) {
    this.page = {page}
    console.log(page)
    }


    setBookProps(name, value){
    this.book = {...this.book, [name]:value}
  }
    setCounter(e) {
    this.count = e.target.count[1];
    }


   //file 업로드

    //강의 예약
    async createBook() {
      try{
        const email = window.localStorage.getItem("id");
        await lecApi.bookCreate(email, this.lec.lec_id, this.lec.status)
      }catch(error){
        console.log(error);

      }
    }
}

export default new LecStore();