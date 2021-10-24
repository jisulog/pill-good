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

    lecCountUpdate(id, title, content, lec_image, room, date, time, level, email, lec_count, number, status){
        return axios.put(this.URL+`create/book_lec/${id}/`, {title:`${title}`, content:`${content}`,
        lec_image:`${lec_image}`,room:`${room}`, date:`${date}`, time:`${time}`, level:`${level}`, email:`${email}`,  lec_count:`${lec_count}`, number:`${number}`, status:`${status}`}).then((response)=>response.data).catch((error)=>console.log(error));
    }
}

export default new LecApi();
