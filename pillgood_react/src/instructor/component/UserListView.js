import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//lec은 강의 정보를 담은 배열(books와 같음), for each로 돌아가면서 강의 정보하나하나를 element로 받아서 출력.  
class UserListView extends Component {
  render() {
    const {user}  = this.props;
  
      return(
        <div>
          <p>
            회원 이메일 : {user.email}<br />
            회원 성함 : {user.name}<br />
            특이사항 : {user.intro}<br /> 
           </p>
           <Link to= "/instructor/lec"><button >강의 목록</button></Link>&nbsp;&nbsp;
        </div>
   
    );
  }
}

export default UserListView;