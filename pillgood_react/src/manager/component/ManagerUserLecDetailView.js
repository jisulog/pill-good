import React, { Component } from 'react';
import moment from 'moment';

class ManagerUserDetailView extends Component {
  render() {
    const { book} = this.props;
    return (
        <tr>
                <td>{book.lec_id.title}</td>
                <td>{moment(book.lec_id.date).format("YY.MM.DD")}</td>
                <td>{moment(book.lec_id.time,"HH:mm:ss").format("HH:mm")}</td>
                <td>{book.lec_id.room}</td>
                <td>
                    {book.lec_id.number} / {book.lec_id.number}
                </td>
                <td>
                    {book.status === 1
                        ? (<span>예약</span>)
                          
                        : book.status === 2
                        ? "취소"
                        : "완료"}
                </td>
            </tr>
            
    );
  }
}

export default ManagerUserDetailView;