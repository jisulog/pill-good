import axios from "axios";

class QnaApi{
    URL = "/Qna/";

    // '' [GET]
    qnaList(){
        return axios.get(this.URL).then((response) => response.data);
    }

    //'<int:pk>/' [GET]
    qnaDetail(qnaId){
        return axios.get(this.URL + `/${qnaId}/`).then((response) => response.data);
    }

    // 'create/' [POST]
    qnaCreate(qna){
        return axios.post(this.URL + `create/`, {
            qna_id: `${qna.qna_id}`,
            title: `${qna.title}`,
            question_user: `${qna.question_user}`,
            question: `${qna.question}`,
            answer_user: `${qna.answer_user}`,
            answer: `${qna.answer}`,
          }).then((response) => response.data);
    }

    // 'update/<int:pk>/' [PUT]
    qnaUpdate(qnaId){
        return axios.put(this.URL + `update/${qnaId}/`).then((response) => response.data);
    }
    
    // 'delete/<int:pk>/' [DELETE]
    qnaDelete(qnaId){
        return axios.delete(this.URL + `delete/${qnaId}/`).then((response) => response.data)
    }

    // 'answer/<int:pk>/' [POST]
    qnaAnswer(qna, qnaId){
        return axios.post(this.URL + `answer/${qnaId}/`, {
            qna_id: `${qna.qna_id}`,
            title: `${qna.title}`,
            question_user: `${qna.question_user}`,
            question: `${qna.question}`,
            answer_user: `${qna.answer_user}`,
            answer: `${qna.answer}`,
          }).then((response) => response.data);

    }
}
export default new QnaApi();