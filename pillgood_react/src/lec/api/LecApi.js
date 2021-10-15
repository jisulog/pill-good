import axios from "axios";
// backend api 호출, 연결

class LecApi {
    URL = "/lec/";

    // ''
    lecList() {
        return axios.get(this.URL).then((response) => response.data);
    }

    // '<int:pk>/'
    lecDetail(id){
        return axios.get(this.URL+`${id}/`)
            .then((response)=> response.data);
    }

    // 'book/<int:pk>'
    lecIndex(id) {
        return axios.get(this.URL+`book/${id}/`)
        .then((response)=> response.data);
    }

    // 'book/create/'
    bookCreate(book) {
        return axios.post(this.URL+'book/create/',{
            book_id:`${book.book_id}`,
            email:`${book.email}`,
            lec_id:`${book.lec_d}`,
            status:`${book.status}`})
        .then((response) => response.data);
 }

}

export default new LecApi();
