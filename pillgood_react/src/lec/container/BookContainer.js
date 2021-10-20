import React, { Component } from 'react';
import {observer} from 'mobx-react';
import LecStore from '../store/LecStore';
import BookView from '../component/BookView';


class BookContainer extends Component {
  lecStore = LecStore;
  
  componentDidMount() {
    const {id} = this.props;
    this.lecStore.selectLec(id); //mount 되면 전체 강의
}

  render() {
    const {lec, setDateProps} = this.lecStore;

    

  // });
    return (
       <div>
         <h1>예약</h1>

        <BookView lec={lec} />
       </div>
    );
  }
}

export default observer(BookContainer);




