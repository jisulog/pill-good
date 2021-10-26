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
        const {lecs} = this.instructorStore;
        console.log(lecs)
        const mylecList = lecs && lecs.map((lec)=>{
            return (<InstructorLecView key = {lec.lec_id} lec={lec}/>)
        });
        return (
            <div>
                {mylecList.length ? (
                    mylecList
                ) : (
                    <tr>
                        <td colSpan="7">강의 내역이 존재하지 않습니다.</td>
                    </tr>
                )}
                <Link to="/instructor/create">
                    <button>새 강의 등록 </button>
                </Link>
                &nbsp;&nbsp;
            </div>
        );
        }
      }
         

export default observer(InstructorLecContainer);
