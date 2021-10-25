import React, { Component } from 'react';
// import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class BookCreateView extends Component {
  render() {
      const { lec, user_id, createBook } = this.props;

      return (
          <div>
              {lec.date} {lec.time}에 "{lec.title}" 예약을 진행하시겠습니까?
              <br />
              <button onClick={() => createBook(user_id)}>예약 확정</button>
              &nbsp;&nbsp;
              <Link to="/lec">
                  <button>강의 목록</button>
              </Link>
              &nbsp;&nbsp;
          </div>
      );
  }
}

export default BookCreateView;


