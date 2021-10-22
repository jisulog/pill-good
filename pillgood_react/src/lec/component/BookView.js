import React, { Component } from 'react';
import LecStore from '../store/LecStore';
import { Link } from 'react-router-dom';
//import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';


class BookView extends Component {
  render() {
    const {lec, setDateProps } = this.props;

    return (
              <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                  orientation="landscape"
                  openTo="day"
                  value={lec.date}
                  renderInput={(params) => <TextField {...params} />}
                      />
              </LocalizationProvider><br />

              강의 번호: {lec.lec_id}<br />
              날짜: {lec.date}<br />
              시간: {lec.time}<br />
              강사명:{lec.email}<br />
              인원:{lec.number}<br />

              <Link to = {`/lec/book/${lec.lec_id}`}><button>예약 등록</button ></Link>
              <Link to = {`/lec/create/book/${lec.lec_id}`}><button>예약 신청</button></Link>
              <Link to= "/lec"><button >돌아가기 </button></Link>&nbsp;&nbsp;
       </div>


    );
  }
}

export default BookView;


