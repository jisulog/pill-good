import axios from "axios";
// backend api 호출, 연결

class InstructorApi {
    URL = "/instructor/";

    // 'lec/user'    #회원 목록
    userList() {
        return axios.get(this.URL+'lec/user/').then((response) => response.data);
    }

    // 'lec/'          #자신의 강의 목록 
    allLecList(){
        return axios.get(this.URL+'lec/')
            .then((response)=> response.data);
    }

    // 'lec/create'
    lecCreate(lec) {
        return axios.post(this.URL+'lec/create',{
            lec_id:`${lec.lec_id}`,
            title:`${lec.title}`,
            content:`${lec.content}`,
            room:`${lec.room}`,
            date:`${lec.date}`,
            time:`${lec.time}`,
            level:`${lec.level}`,
            email:`${lec.email}`,
            number:`${lec.number}`,
            status:`${lec.statusl}`})
        .then((response)=> console.log(response.data));
    }

    // 'lec/update/<int:pk>'
    lecUpdate(lec) {
        return axios.put(this.URL+'lec/update/',
        {room:`${lec.room}`},
        {date:`${lec.date}`},
        {time:`${lec.time}`},
        )
        .then((response) => response.data);
 }

}

export default new InstructorApi();
