import React, { Component } from 'react';
import LecStore from '../store/LecStore';
import {observer} from 'mobx-react';
import BookCreateView from '../component/BookCreateView';


class BookCreateContainer extends Component {
    lecStore = LecStore;

    componentDidMount() {
        const { id } = this.props;
        this.lecStore.selectLec(id); //mount 되면 강의 디테일
    }

    render() {
        const { lec, createBook } = this.lecStore;
        const user_id = window.localStorage.getItem("id");

        return (
            <div>
                <h1>예약 확정</h1>
                <BookCreateView
                    user_id={user_id}
                    lec={lec}
                    createBook={createBook}
                />
            </div>
        );
    }
}

export default observer(BookCreateContainer);