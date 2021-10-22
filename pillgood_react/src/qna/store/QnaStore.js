import {makeAutoObservable, runInAction} from "mobx";
import qnaApi from '../api/QnaApi';
class QnaStore {
    qna = {
        qna_id: 0,
        title: "",
        category: "",
        question_user: "",
        question: "",
        answer: "",
        date: ""
    }

    qnas = [];
    qnaFilter = [];
    message = "";

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    //qna 상세보기
    async selectQna(qna_id) {
        try {
            const result = await qnaApi.qnaDetail(qna_id);
            runInAction(() => {
                this.qna = result;
                console.log(result)
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    //qna 목록보기
    async selectQnaAll() {
        try {
            const result = await qnaApi.qnaList();
            runInAction(() => {
                this.qnas = result;
            });
        } catch (error) {
            console.log(error);
        }
    }

    //qna 등록하기
    async createQna(name) {
        try {
            this.qna.question_user = name
            await qnaApi.qnaCreate(
                this.qna.title,
                this.qna.category,
                this.qna.question_user,
                this.qna.question,
            );
            console.log(123);
            this.selectQnaAll();
        } catch (error) {
            console.log(error);
            runInAction(() => this.message = error.message);
        }
    }

    //qna 수정하기
    async handlerModify() {
        try {
            await qnaApi.qnaUpdate(
                this.qna.qna_id,
                this.qna.title, 
                this.qna.category,
                this.qna.question_user,
                this.qna.question,
                this.qna.answer
                );
            this.selectQnaAll();
        } catch (error) {
            console.log(error);
            runInAction(() => this.message = error.message);
        }
    }

    //qna 삭제하기
    async handlerRemove() {
        try {
            await qnaApi.qnaDelete(this.qna.qna_id);
        } catch (error) {
            console.log(error);
        }
    }

    changeQnaFilter(qnaFilter){
        this.qnaFilter = qnaFilter;
      }

    handlerSet(name, value) {
        this.qna = {
            ...this.qna,
            [name]: value
        }
    }

}

export default new QnaStore();