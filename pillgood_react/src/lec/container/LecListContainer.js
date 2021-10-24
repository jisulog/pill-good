import React, { Component } from "react";
import {observer} from 'mobx-react';
import LecStore from "../store/LecStore";
import LecView from "../component/LecView";
// import Pagination from "react-js-pagination";




//LecStore로부터 데이터 받아서 쓸 것. 
class LecListContainer extends Component {
    lecStore = LecStore;

    componentDidMount() {
        this.lecStore.selectAll(); //mount 되면 전체 강의
    }


    render() {
        const {lecs, page, handlePageChange, activePage} = this.lecStore;
        const {id} = this.props;
      ;


        const    lecList = lecs && lecs.map((element)=>{
            return (<LecView key={element.lec_id} lec = {element}/>
                     );
        });



        return(
            <div>
            <h1>강의 목록</h1>
               {lecList}

            </div>
          );
        }
      }
      

export default observer(LecListContainer);
