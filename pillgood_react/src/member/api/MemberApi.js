import axios from "axios";
// backend api 호출, 연결

class MemberApi {
    URL = "/member/";

    // ''
    member() {
        return axios.get(this.URL).then((response) => response.data);
    }

    // 'update/'
    memberUpdate(member) {
        return axios
            .put(this.URL + "update/", { member: `${member}` })
            .then((response) => response.data);
    }
    // 'delete/'
    memberDelete(member) {
        return axios
            .put(this.URL + "delete/", { member: `${member}` })
            .then((response) => response.data);
    }

    // 'paylist/'
    payList() {
        return axios
            .get(this.URL + "paylist/")
            .then((response) => response.data);
    }

    // 'paylist/refund/<int:pk>/'
    payRefund(payId) {
        return axios
            .put(this.URL + `refund/${payId}/`)
            .then((response) => response.data);
    }
    // 'lec/'
    bookList() {
        return axios.get(this.URL + "book/").then((response) => response.data);
    }

    // 'lec/cancel/<int:pk>/'
    bookCancel(bookId) {
        return axios
            .put(this.URL + `book/cancel/${bookId}`)
            .then((response) => response.data);
    }
}

export default new MemberApi();
