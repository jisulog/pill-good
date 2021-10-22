import { makeAutoObservable, runInAction } from "mobx";
import MemberApi from "../api/MemberApi";

class BookStore {
    books = [];

    book = {
        book_id: 0,
        email: 0,
        lec_id: 0,
        status: 0
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

    async selectBook(bookId) {
        try {
            const result = await MemberApi.bookDetail(bookId);

            runInAction(() => {
                this.book = result;
                console.log(333)
            });
        } catch (error) {
            runInAction(() => (this.message = error.message));
        }        
    }

    async cancelBook(bookId, id){
        try {
            const result = await MemberApi.bookDetail(bookId);
            this.book = result;
            this.book.status = 2;
            
            await MemberApi.bookCancel(
                this.book.book_id,
                this.book.email,
                this.book.lec_id,
                this.book.status,
            );

            runInAction(() => {
                this.selectBookAll(id);
                
            });
        } catch (error) {
            runInAction((this.message = error.message));
        }
    }
}

export default new BookStore();
