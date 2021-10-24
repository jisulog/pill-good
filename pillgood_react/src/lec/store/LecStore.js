import { makeAutoObservable, runInAction } from "mobx";
import lecApi from "../api/LecApi";

class LecStore {
    lec = {lec_id :"", title:"",content:"", room :"", date: "", time:"", level:"", email:"", lec_count: "", number:"", status :1};
    lecs = [];

    message = "";

    book = {book_id:"", email:"" , lec_id:"", status:"1"};
    books =[];

    activePage = 1;

    user = {};
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
            runInAction(() => {this.lecs = result;
                 console.log(this.lecs)
            });
        } catch(error) {
            runInAction(() => (this.message = error.message));
        }
    }

    //페이지
    handlePageChange(pageNumber) {
        this.activePage = {pageNumber}
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
        if (this.lec.lec_count < this.lec.number){
            await lecApi.bookCreate(email, this.lec.lec_id, this.lec.status);
            console.log(this.lec.lec_count)
        } else {
            return alert("예약 인원이 마감되었습니다")
        }
      }catch(error){
        console.log(error);
      }
    }
}

export default new LecStore();