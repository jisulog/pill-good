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

    // 'create/book/<int:pk>'
    bookCreate(email, lec_id, status) {

        return axios.post(this.URL+`create/book/${lec_id}/`,{
            email:`${email}`,
            lec_id:`${lec_id}`,
            status: 1
           })
        .then((response) => response.data);
 }

}

export default new LecApi();
