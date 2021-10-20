import { makeAutoObservable, runInAction } from "mobx";
import MemberApi from "../api/MemberApi";

class BookStore {
    books = [];

    book = {
        book_id: 0,
        email: {
            id: 0,
            name: "",
            phone: "",
        },
        lec_id: {
            lec_id: 0,
            title: "",
            room: "",
            date: "",
            time: "",
            level: 0,
            email: {
                email: "",
                name: "",
                intro: ""
            },
            number: 0,
            status: 0
        },
        status: 1
    };
    message = "";

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    init() {
        this.books = [];

        this.book = {
            book_id: 0,
            email: 0,
            lec_id: 0,
            status: 0,
        };
    }

    async selectBookAll(id) {
        try {
            const result = await MemberApi.bookList(id);

            runInAction(() => {
                this.books = result;
            });
        } catch (error) {
            runInAction(() => (this.message = error.message));
        }
    }
}

export default new BookStore();
