import { makeAutoObservable, runInAction } from "mobx";
import lecApi from "../api/LecApi";

class LecStore {
    lec = {lec_id :"", title:"",content:"", room :"", date: "", time:"", level:"", email:"", number:"", status :1};
    lecs = [];
    message = "";

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }



//action 

    async selectLec(id) {
        try{
          const result = await lecApi.lecDetail(id);
          runInAction(() => {this.lec = result;
            console.log(result)
        });
        }catch(error){
          this.mesaage = error.message}
      }
      
    //전체 강의 목록  
    async selectAll() {
        try {
            const result = await lecApi.lecList();
            // console.log(result)
            runInAction(() => {this.lecs = result;
                // console.log(this.lecs)
            });
        } catch(error) {
            runInAction(() => (this.message = error.message));
        }
    }
}

export default new LecStore();