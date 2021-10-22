import React, { Component } from 'react';
// import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
//import isWeekend from 'date-fns/isWeekend';
//import TextField from '@mui/material/TextField';
//import AdapterDateFns from '@mui/lab/AdapterDateFns';
//import LocalizationProvider from '@mui/lab/LocalizationProvider';
//import StaticDatePicker from '@mui/lab/StaticDatePicker';


class BookCreateView extends Component {
  render() {
    const {lec, book, createBook,  setBookProps} = this.props;


    return (
        <div>

              강사명 : <input type="text"
                                id="email"
                                name="email"
                                value={lec.email}
                                onChange={(e)=>setBookProps(e.target.name, e.target.value)}
                                placeholder="강사명 " /><br />
               강의번호 : <input type="number"
                                id="lec_id"
                                name="lec_id"
                                value={lec.lec_id}
                                onChange={(e)=>setBookProps(e.target.name, e.target.value)}
                                placeholder="강의번호 " /><br />
               상태 : <input type="number"
                                id="status"
                                name="status"
                                value={book.status}
                                onChange={(e)=>setBookProps(e.target.name, e.target.value)}
                                placeholder="상태 " /><br />

                <button onClick={()=>createBook()}>예약 확정</button>&nbsp;&nbsp;
                <Link to= "/lec"><button >강의 목록</button></Link>&nbsp;&nbsp;


        </div>
    );
  }
}

export default BookCreateView;


