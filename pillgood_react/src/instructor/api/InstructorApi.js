import axios from "axios";
// backend api 호출, 연결

class InstructorApi {
    URL = '/instructor/';

    // 'user/<int:pk>'    #회원 목록
    userList(id) {
        return axios.get(this.URL+`user/${id}/`).then((response) => response.data, console.log("api"));
    }

    // 'lec/'          #자신의 강의 목록 
    lecList() {
        return axios.get(this.URL+'lec/').then((response)=> response.data);
    }

    // 'lec/<int:pk>'
    lecDetail(id){
        return axios.get(this.URL+`lec/${id}/`)
            .then((response)=> response.data);
    }

    // 'lec/create'
    lecCreate(title, content, image, room, date, time, level, email, number, status) {
        return axios.post(this.URL+ `lec/create/`,{
            title:`${title}`,
            content:`${content}`,
            image:`${image}`,
            room:`${room}`,
            date:`${date}`,
            time:`${time}`,
            level:`${level}`,
            email:`${email}`,
            number:`${number}`,
            status:`${status}`
            })
        .then((response)=> response.data).catch((error)=>console.log(error));
    };
    
   
    // 'lec/update/<int:pk>'
      lecUpdate(lec_id, title, content, room, date, time, level, email, number, status){
        return axios.put(this.URL+`lec/update/${lec_id}/`,
            {title:`${title}`,
            content:`${content}`,
            room:`${room}`,
            date:`${date}`,
            time:`${time}`,
            level:`${level}`,
            email:`${email}`,
            number:`${number}`,
            status:`${status}`})
        .then((response)=>response.data).catch((error)=>console.log(error));
    }

}

export default new InstructorApi();
