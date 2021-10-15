import React, { Component } from 'react';


class ManagerUserDetailView extends Component {
  render() {
    const {user} = this.props;
    return (
      <div>
        {user.name}<br/>
        {user.intro}<br/>
        <hr/>
        기본정보<br/>
        ID: {user.email}<br/>
        연락처: {user.phone}<br/>
        가입일자: {user.join_date}<br/>
        마지막 접속일자: {user.last_login}<br/>
        <hr/>
        멤버쉽 정보
        <hr/>
        예약정보
        <hr/>
        상담정보
      </div>
    );
  }
}

export default ManagerUserDetailView;