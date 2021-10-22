import React, { Component } from 'react';


class ManagerUserView extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        {user.email}
        {user.name}
        {user.type === 1 ? "관리자" :
          user.type === 2 ? "강사" :
            user.type === 3 ? "일반" : "탈퇴회원"}
      </div>
    );
  }
}

export default ManagerUserView;