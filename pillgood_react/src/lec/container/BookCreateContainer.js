import React, { Component } from 'react';
import LecStore from '../store/LecStore';
import {observer} from 'mobx-react';
import BookCreateView from '../component/BookCreateView';


class BookCreateContainer extends Component {
    lecStore = LecStore;

  componentDidMount() {
    const {id} = this.props;
    this.lecStore.selectLec(id); //mount 되면 전체 강의
    console.log(id)}

  render() {
    const {lec, book, createBook,  setBookProps} = this.lecStore;



    return (
      <div>
          <h1>예약 확정</h1>
          <BookCreateView book={book} lec={lec} createBook={createBook} setBookProps={setBookProps}/>
      </div>

    );
  }
}

export default observer(BookCreateContainer);