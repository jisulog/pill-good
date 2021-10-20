import React, { Component } from 'react';

class BookListView extends Component {
    render() {
        const {book} = this.props;
        return (
            <tr>
                <td>{book.lec_id.title}</td>
                <td>{book.lec_id.date}</td>
                <td>{book.lec_id.time}</td>
                <td>{book.lec_id.room}</td>
                <td>{book.lec_id.email.name}</td>
                <td>
                    {book.lec_id.number} / {book.lec_id.number}
                </td>
                <td>
                    {book.status === 1
                        ? "예약"
                        : book.status === 2
                        ? "취소"
                        : "완료"}
                </td>
            </tr>
        );
    }
}

export default BookListView;