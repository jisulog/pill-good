import axios from "axios";

class MemberApi {
    URL = "/member";

    // ''
    member(id) {
        return axios.get(this.URL + `/${id}`).then((response) => response.data);
    }

    // 'update/'
    memberUpdate(id, password, name, phone, intro, image, type, is_active) {
        return axios
            .put(this.URL + `/update/${id}`, {
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

    // 'passwordupdate/'
    memberPasswordUpdate(member, oldPassword, newPassword) {
        return axios
            .put(this.URL + `/passwordupdate/${member.id}`, {
                member: `${member}`,
                oldPassword: `${oldPassword}`,
                newPassword: `${newPassword}`,
            })
            .then((response) => response.data);
    }

    // 'delete/'
    memberDelete(member, oldPassword) {
        return axios
            .put(this.URL + `/delete/${member.id}`, {
                member: `${member}`,
                oldPassword: `${oldPassword}`,
            })
            .then((response) => response.data);
    }

    // 'paylist/'
    payList(id) {
        return axios
            .get(this.URL + `/paylist/${id}`)
            .then((response) => response.data);
    }

    // 'paylist/refund/<int:pk>/'
    payRefund(payId) {
        return axios
            .put(this.URL + `/paylist/refund/${payId}/`)
            .then((response) => response.data);
    }

    // 'lec/'
    bookList(id) {
        return axios
            .get(this.URL + `/book/${id}`)
            .then((response) => response.data);
    }

    // 'lec/cancel/<int:pk>/'
    bookCancel(bookId) {
        return axios
            .put(this.URL + `/book/cancel/${bookId}`)
            .then((response) => response.data);
    }
}

export default new MemberApi();
