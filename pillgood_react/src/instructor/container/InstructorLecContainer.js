import React, { Component } from "react";
import {observer} from 'mobx-react';
import InstructorStore from "../store/InstructorStore";
import InstructorLecView from '../component/InstructorLecView';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';


class InstructorLecContainer extends Component {
  instructorStore = InstructorStore;


    componentDidMount() {
        const user = window.localStorage.getItem("id");
        this.instructorStore.instructorLec(user);//mount 되면 전체 강의
        console.log(user)
    }

    render() {

        const {lecs} = this.instructorStore;
        const mylecList = lecs && lecs.map((lec)=>{
            return (<InstructorLecView key = {lec.lec_id} lec={lec}/>)
        });

        return (
              <div>
              <h2 style={{textAlign:'center', color:'#574934'}} >내 강의 목록</h2>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>강의명</TableCell>
                <TableCell align="left">날짜</TableCell>
                <TableCell align="center">시간</TableCell>
                <TableCell align="center">장소</TableCell>
                <TableCell align="center">회원</TableCell>
            </TableRow>
            </TableHead>
            </Table>
                {mylecList}
            </div>

    );
  }

}
export default observer(InstructorLecContainer);
