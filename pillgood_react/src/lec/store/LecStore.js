import { makeAutoObservable, runInAction } from "mobx";
import lecApi from "../api/LecApi";

class LecStore {
    lec = {
        lec_id: 0,
        title: "",
        content: "",
        lec_image: "",
        room: "",
        date: "",
        time: "",
        level: 0,
        email: 0,
        lec_count: 0,
        number: 0,
        status: 1,
    };
    lecs = [];

    message = "";

    book = { book_id: "", email: "", lec_id: "", status: "1" };
    books = [];

    pays = [];
    pay = {
        pay_id: 0,
        pay_type: 0,
        remain: 0,
        pay_date: "",
        end_date: "",
        membership_id: 0,
        status: 0,
    };

    activePage = 1;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    //action

    async selectLec(id) {
        try {
            const result = await lecApi.lecDetail(id);
            runInAction(() => {
                this.lec = result;
            });
        } catch (error) {
            this.message = error.message;
        }
    }

    //전체 강의 목록
    async selectAll() {
        try {
            const result = await lecApi.lecList();
            runInAction(() => {
                this.lecs = result;
            });
        } catch (error) {
            runInAction(() => (this.message = error.message));
        }
    }

    //페이지
    handlePageChange(pageNumber) {
        this.activePage = { pageNumber };
    }

    setBookProps(name, value) {
        this.book = { ...this.book, [name]: value };
    }

    setCounter(e) {
        this.count = e.target.count[1];
    }

    //file 업로드

    //강의 예약
    async createBook(user_id) {
        try {
            if (this.lec.lec_count < this.lec.number) {
                
                // book create
                const result = await lecApi.bookCreate(user_id, this.lec.lec_id, 1);
                
                if (result.message !== "" && result.message !== undefined) {
                    return alert(result.message);
                }

                // lec count update
                let count = this.lec.lec_count + 1;
                await lecApi.lecCountUpdate(
                    this.lec.lec_id,
                    this.lec.title,
                    this.lec.content,
                    this.lec.lec_image,
                    this.lec.room,
                    this.lec.date,
                    this.lec.time,
                    this.lec.level,
                    this.lec.email,
                    count,
                    this.lec.number,
                    this.lec.status
                );
                this.selectLec(this.lec.lec_id);

                //membership count minus
                // const membership = await lecApi.
                
            } else {
                return alert("예약 인원이 마감되었습니다");
            }
        } catch (error) {
            this.message = error.message;
        }
    }
}

export default new LecStore();
