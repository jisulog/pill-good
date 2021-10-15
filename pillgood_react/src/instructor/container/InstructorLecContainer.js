import React, { Component } from "react";
import {observer} from 'mobx-react';
import InstructorStore from "../store/InstructorStore";
import MyLecListView from '../component/InstructorLecView';


//LecStore로부터 데이터 받아서 쓸 것. 
class InstructorLecContainer extends Component {
  instructorStore = InstructorStore;

    componentDidMount() {
        this.instructorStore.selectAllLec(); //mount 되면 전체 강의
    }

    render() {
        const {lecs} = this.instructorStore;
        console.log(lecs)
        const mylecList = lecs.map((lec)=>{
            console.log(lec)
            return (<MyLecListView key = {lec.lec_id} lec={lec}/>)
        });
        console.log(mylecList)
        return(
            <div>
            <h1> 나(강사)의 강의  목록</h1>
             {mylecList}
            </div>
          );
        }
      }
      

export default observer(InstructorLecContainer);
