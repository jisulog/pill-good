import React, { Component } from 'react';
import LecStore from '../store/LecStore';
import {observer} from 'mobx-react';
import BookCreateView from '../component/BookCreateView';


class BookCreateContainer extends Component {
    lecStore = LecStore;


  componentDidMount() {
    const {id} = this.props;
    this.lecStore.selectLec(id); //mount 되면 전체 강의
    }


  render() {
    const {lec, book, createBook} = this.lecStore;
    const email = window.localStorage.getItem("id");


    return (
      <div>
          <h1>예약 확정</h1>
          <BookCreateView book={book}  email= {email} lec={lec} createBook={createBook}/>
      </div>

    );
  }
}

export default observer(BookCreateContainer);