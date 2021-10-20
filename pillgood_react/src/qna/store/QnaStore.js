import {makeAutoObservable, runInAction} from "mobx";
import qnaApi from '../api/QnaApi';
class QnaStore {
    qna = {qna_id: "", title: "", category: "",question_user: "", question: "", answer_user: "", answer: "", date: ""}
    qnas = [];
    message = "";

    
    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    //qna 상세보기
    async selectQna(qna_id) {
        try {
            const result = await qnaApi.qnaDetail(qna_id);
            runInAction(() => {this.qna = result;
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
            console.log(result)
            runInAction(() => {
                this.qnas = result;
                console.log(this.qnas)
            });
        } catch (error) {
            console.log(error);
        }
    }

    //qna 등록하기
    async createQna() {
        try {
            await qnaApi.qnaCreate(this.qna.qna_id, this.qna.title, this.qna.category, this.qna.question_user, this.qna.question);
            this.selectAll();
        } catch (error) {
            console.log(error);
            runInAction(() => this.message = error.message);
        }
    }

    //qna 수정하기
    async handlerModify() {
        try {
            await qnaApi.qnaUpdate(this.qna.qna_id, this.qna);
            this.selectAll();
        } catch (error) {
            console.log(error);
            runInAction(() => this.message = error.message);
        }
    }

    //qna 삭제하기
    async handlerRemove() {
        try {
            await qnaApi.qnaDelete(this.qna.qna_id);
            this.selectAll();
        } catch (error) {
            console.log(error);
            runInAction(() => this.message = error.message);
        }
    }

    handlerSet(name, value){
        this.qna = {...this.qna, [name]:value}
      }

}

export default new QnaStore();