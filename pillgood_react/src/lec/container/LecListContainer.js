import React, { Component }  from "react";
import {observer} from 'mobx-react';
import LecStore from "../store/LecStore";
import LecView from "../component/LecView";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
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

        const lecList = lecs && lecs.map((element)=>{
            return (<LecView key={element.lec_id} lec = {element}/>
                     );
        });

        return(
            <div>
               {lecList}
            </div>
          );
        }
      }


export default observer(LecListContainer);
