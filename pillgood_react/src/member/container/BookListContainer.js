import { observer } from "mobx-react";
import React, { Component } from "react";
import BookListView from "../component/BookListView";
import BookStore from "../store/BookStore";

class BookListContainer extends Component {
    bookStore = BookStore;

    componentDidMount() {
        let user = window.localStorage.getItem("id");
        if (user === "" || user === null) {
            user = 4;
        }

        this.bookStore.selectBookAll(user);
    }

    render() {
        const { books, cancelBook } = this.bookStore;

        const bookList = books.map((book) => {
            return <BookListView key={book.book_id} book={book} onCancel={cancelBook} />;
        });

        return (
            <div>
                {/* 달력표시 */}

                <table>
                    <thead>
                        <tr>
                            <th>강의명</th>
                            <th>날짜</th>
                            <th>시간</th>
                            <th>장소</th>
                            <th>강사</th>
                            <th>예약인원</th>
                            <th>상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookList.length ? (
                            bookList
                        ) : (
                            <tr>
                                <td colSpan='7'>강의 예약 및 진행 내역이 존재하지 않습니다.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default observer(BookListContainer);
