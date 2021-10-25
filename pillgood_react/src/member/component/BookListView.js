import React, { Component } from 'react';

class BookListView extends Component {
    render() {
        const {book, onCancel} = this.props;
        return (
            <tr>
                <td>{book.lec_id.title}</td>
                <td>{book.lec_id.date}</td>
                <td>{book.lec_id.time}</td>
                <td>{book.lec_id.room}</td>
                <td>{book.lec_id.email.name}</td>
                <td>
                {book.lec_id.lec_count} / {book.lec_id.number}
                </td>
                <td>
                    {book.status === 1
                        ? (<span>예약
                              <input
                                  type="button"
                                  value="취소"
                                  onClick={(e) => {
                                      onCancel(book.book_id, book.email.id, book.lec_id.lec_id);
                                  }}
                              /></span>)
                          
                        : book.status === 2
                        ? "취소"
                        : "완료"}
                </td>
            </tr>
        );
    }
}

export default BookListView;