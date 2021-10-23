import axios from "axios";
import { uploadFile } from 'react-s3';
import {S3_BUCKET, REGION, ACCESS_KEY, SECRET_ACCESS_KEY} from '../../image/S3bucket';
import moment from "moment";

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY
}

class MemberApi {
    URL = "/member";

    // ''
    member(id) {
        return axios
            .get(this.URL + `/${id}/`)
            .then((response) => response.data);
    }

    // 'update/'
    memberUpdate(id, password, name, phone, intro, image, type, is_active) {
        return axios
            .put(this.URL + `/update/${id}/`, {
                id: `${id}`,
                password: `${password}`,
                name: `${name}`,
                phone: `${phone}`,
                intro: `${intro}`,
                image: `${image}`,
                type: `${type}`,
                is_active: `${is_active}`,
            })
            .then((response) => response.data);
    }

    imageUpdate(file) {
        
        const now = moment().format("YYYYMMDDHHmmSSS");
        file.name = file.name + now;
        uploadFile(file, config)
            .then(data => {console.log(data); return file.name})
            .catch(err => {console.error(err); return null})
    }

    // 'passwordupdate/'
    memberPasswordUpdate(member, oldPassword, newPassword) {
        /////////////////
        return axios
            .put(this.URL + `/passwordupdate/${member.id}/`, {
                member: `${member}`,
                oldPassword: `${oldPassword}`,
                newPassword: `${newPassword}`,
            })
            .then((response) => response.data);
    }

    // 'delete/'
    memberDelete(id, password, name, phone, intro, image, type, is_active) {
        return axios
            .put(this.URL + `/delete/${id}/`, {
                id: `${id}`,
                password: `${password}`,
                name: `${name}`,
                phone: `${phone}`,
                intro: `${intro}`,
                image: `${image}`,
                type: `${type}`,
                is_active: `${is_active}`
            })
            .then((response) => response.data);
    }

    // 'paylist/'
    payList(id) {
        return axios
            .get(this.URL + `/paylist/${id}/`)
            .then((response) => response.data);
    }

    // 'paylist/detail/<int:pk>'
    payDetail(payId) {
        return axios
            .get(this.URL + `/paylist/detail/${payId}/`)
            .then((response) => response.data);
    }

    // 'paylist/refund/<int:pk>/'
    payRefund(
        pay_id,
        pay_type,
        remain,
        pay_date,
        end_date,
        membership_id,
        status
    ) {
        return axios
            .put(this.URL + `/paylist/refund/${pay_id}/`, {
                pay_id: `${pay_id}`,
                pay_type: `${pay_type}`,
                remain: `${remain}`,
                pay_date: `${pay_date}`,
                end_date: `${end_date}`,
                membership_id: `${membership_id}`,
                status: `${status}`,
            })
            .then((response) => response.data);
    }

    // 'book/'
    bookList(id) {
        return axios
            .get(this.URL + `/book/${id}/`)
            .then((response) => response.data);
    }

    // 'book/detail/<int:pk>'
    bookDetail(bookId) {
        return axios
            .get(this.URL + `/book/detail/${bookId}/`)
            .then((response) => response.data);
    }

    // 'book/cancel/<int:pk>/'
    bookCancel(book_id, email, lec_id, status) {
        return axios
            .put(this.URL + `/book/cancel/${book_id}/`, {
                book_id: `${book_id}`,
                email: `${email}`,
                lec_id: `${lec_id}`,
                status: `${status}`,
            })
            .then((response) => response.data);
    }
}

export default new MemberApi();
