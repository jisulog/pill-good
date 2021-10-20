import React, { Component } from "react";
import {observer} from 'mobx-react';
import InstructorStore from "../store/InstructorStore";
import InstructorLecView from '../component/InstructorLecView';
import { Link } from 'react-router-dom';



class InstructorLecContainer extends Component {
  instructorStore = InstructorStore;

    componentDidMount() {
        this.instructorStore.selectAllLec(); //mount 되면 전체 강의
    }

    render() {
        const {lecs} = this.instructorStore;
//        console.log(lecs)
        const mylecList = lecs && lecs.map((lec)=>{
//            console.log(lec)
            return (<InstructorLecView key = {lec.lec_id} lec={lec}/>)
        });
//        console.log(mylecList)
        return(
            <div>
            <h1> 나(강사)의 강의  목록</h1>
            <Link to= "/instructor/lec/create"><button >강의 등록 </button></Link>&nbsp;&nbsp;
             {mylecList}
            </div>
          );
        }
      }
         

export default observer(InstructorLecContainer);