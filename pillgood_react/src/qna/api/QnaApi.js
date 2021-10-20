import axios from "axios";


class QnaApi{
    URL = "/qna/";

    // '' [GET]
    qnaList(){
        return axios.get(this.URL).then((response) => response.data);
    }

    //'<int:pk>/' [GET]
    qnaDetail(qna_id){
        return axios.get(this.URL + `${qna_id}/`)
        .then((response) => response.data);
    }

    // 'create/' [POST]
    qnaCreate(qna){
        return axios.post(this.URL + `create/`, {
            qna_id: `${qna.qna_id}`,
            title: `${qna.title}`,
            category : `${qna.category}`,
            question_user: `${qna.question_user}`,
            question: `${qna.question}`,
            answer_user: `${qna.answer_user}`,
            answer: `${qna.answer}`,
          }).then((response) => response.data, console.log("dd"));
    }

    // 'update/<int:pk>/' [PUT]
    qnaUpdate(qna_id){
        return axios.put(this.URL + `update/${qna_id}/`).then((response) => response.data);
    }
    
    // 'delete/<int:pk>/' [DELETE]
    qnaDelete(qna_id){
        return axios.delete(this.URL + `delete/${qna_id}/`).then((response) => response.data)
    }

    // 'answer/<int:pk>/' [POST]
    qnaAnswer(qna, qna_id){
        return axios.post(this.URL + `answer/${qna_id}/`, {
            qna_id: `${qna.qna_id}`,
            title: `${qna.title}`,
            category : `${qna.category}`,
            question_user: `${qna.question_user}`,
            question: `${qna.question}`,
            answer_user: `${qna.answer_user}`,
            answer: `${qna.answer}`,
          }).then((response) => response.data);

    }
}
export default new QnaApi();