import axios from "axios";
import { uploadFile } from 'react-s3';
// backend api 호출, 연결

const config= {
    bucketName : 'pillgoodimagebucket',
    region: 'ap-northeast-2',
    accessKeyId: 'AKIA5VZTIAOJV74NKNXA',
    secretAccessKey: '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',
   }

class InstructorApi {
    URL = '/instructor/';

    // 'user/<int:pk>'    #회원 목록
    userList(id) {
        return axios.get(this.URL+`user/${id}/`).then((response) => response.data, console.log("api"));
    }

    // 'lec/<int:id>'          #자신의 강의 목록
    lecList(id) {
        return axios.get(this.URL+`lec/${id}/`).then((response)=> response.data);
    }

    // 'lec/<int:pk>'
    lecDetail(id){
        return axios.get(this.URL+`lec/${id}/`)
            .then((response)=> response.data);
    }

    // 'lec/create'
    lecCreate(title, content, image, room, date, time, level, email, number, status) {
        return axios.post(this.URL+ `create/`,{
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
    
   imageUpdate(file){
        uploadFile(file, config)
        .then(data => console.log(data))
        .catch(err => console.log(err))
        }

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
