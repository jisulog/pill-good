import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//lec은 강의 정보를 담은 배열(books와 같음), for each로 돌아가면서 강의 정보하나하나를 element로 받아서 출력.  
class LecView extends Component {

  render() {
    const {lec}  = this.props;


      return(
        <div>
          <p>
            강좌 이미지: {lec.image}<br />
            강좌명 : {lec.title}<br />

         <Link to = {`/lec/${lec.lec_id}`}><button>상세보기</button></Link>


           </p>
        </div>

    );
  }
}

export default LecView;