import {makeAutoObservable, runInAction} from "mobx";
import qnaApi from '../api/QnaApi';
class QnaStore {
    qna = {qna_id: 0, title: "title", question_user: "", question: "", answer_user: "", answer: ""}
    qnas = [];
    message = "";

    
    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    //qna 상세보기
    async selectQna(qna) {
        try {
            const result = await qnaApi.qnaDetail(qna.qnaId);
            runInAction(() => this.qna = result);
        } catch (error) {
            console.log(error);
        }
    }

    //qna 목록보기
    async selectAll() {
        try {
            const result = await qnaApi.qnaList();
            runInAction(() => this.qnas = result);
        } catch (error) {
            console.log(error);
        }
    }

    //qna 등록하기
    async handlerAdd() {
        try {
            await qnaApi.qnaCreate(this.qna);
            this.selectAll();
        } catch (error) {
            console.log(error);
            runInAction(() => this.message = error.message);
        }
    }

    //qna 수정하기
    async handlerModify() {
        try {
            await qnaApi.qnaUpdate(this.qna.qnaId, this.qna);
            this.selectAll();
        } catch (error) {
            console.log(error);
            runInAction(() => this.message = error.message);
        }
    }

    //qna 삭제하기
    async handlerRemove() {
        try {
            await qnaApi.qnaDelete(this.qna.qnaId);
            this.selectAll();
        } catch (error) {
            console.log(error);
            runInAction(() => this.message = error.message);
        }
    }

}

export default new QnaStore();