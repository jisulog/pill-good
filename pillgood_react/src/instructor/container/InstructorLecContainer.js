import React, { Component } from "react";
import {observer} from 'mobx-react';
import InstructorStore from "../store/InstructorStore";
import InstructorLecView from '../component/InstructorLecView';
import { Link } from 'react-router-dom';


class InstructorLecContainer extends Component {
  instructorStore = InstructorStore;

    componentDidMount() {
        const user = window.localStorage.getItem("id");
        this.instructorStore.instructorLec(user);//mount 되면 전체 강의
    }

    render() {

        const columns = [
          { field: 'id', headerName: 'No.', headerClassName: 'super-app-theme--header', width: 120 },
          { field: 'title', headerName: '제목', headerClassName: 'super-app-theme--header', width: 200 },
          { field: 'date', headerName: '날짜', headerClassName: 'super-app-theme--header', width: 150 },
          { field: 'time', headerName: '시간', headerClassName: 'super-app-theme--header', width: 120 },
          { field: 'member', headerName: '예약인원', headerClassName: 'super-app-theme--header', width: 140}]


        const {lecs} = this.instructorStore;
        const rows=[];
        lecs.forEach((lec)=>{
        rows.push(
        {id: lec.lec_id, title:lec.title, date:lec.date, time:lec.time, member:lec.lec_count}
        )})
//        const mylecList = lecs && lecs.map((lec)=>{
//            return (<InstructorLecView key = {lec.lec_id} lec={lec}/>)
//        });

        return (
      <div style={{width: '80%', margin: '10px auto'}}>
        <h2 style={{textAlign:'center', color:'#574934'}} >내 강의 목록</h2>
         {<InstructorLecView columns={columns} rows={rows} />}
       </div>
    );
  }

}
export default observer(InstructorLecContainer);
