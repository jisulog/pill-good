import React, { Component } from "react";
import {observer} from 'mobx-react';
import LecStore from "../store/LecStore";
import LecView from "../component/LecView";

//LecStore로부터 데이터 받아서 쓸 것. 
class LecListContainer extends Component {
    lecStore = LecStore;

    componentDidMount() {
        this.lecStore.selectAll(); //mount 되면 전체 강의
    }

    render() {
        const {lecs} = this.lecStore;
        console.log(lecs.length)
        const lecList = lecs.map((element)=>{
            // console.log(element)
            return (<LecView key={element.lec_id} lec = {element}/>)

        });
        console.log(lecList)
        return(
            <div>
            <h1>강의 목록</h1>
             {lecList}
            </div>
          );
        }
      }
      

export default observer(LecListContainer);
