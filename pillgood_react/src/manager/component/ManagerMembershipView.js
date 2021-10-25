import React, { Component } from 'react';
import { DataGrid } from '@mui/x-data-grid';

class ManagerMembershipView extends Component {
  render() {
    const { columns, rows } = this.props;
    return (
      // <tr>
      //   <td>{membership.number}회</td>
      //   <td>{membership.period}일</td>
      //   <td>{new Intl.NumberFormat('ja-JP', { currency: 'KRW' }).format(membership.price)}원</td>
      //   <td>{membership.type === 1 ? "1인" : membership.type === 2 ? "2인" : "8인"}</td>
      //   <td>{membership.status === 1 ? "활성" :
      //   membership.status === 2 ? "비활성" : "" }</td>
      //   <td>{membership.status === 1 ? <button onClick={() => accessMembership(membership.membership_id, membership.status)}>비활성</button> :
      //   membership.status === 2 ?  <button onClick={() => accessMembership(membership.membership_id, membership.status)}>활성</button> : ""}
      //   </td>
      // </tr>
      <DataGrid style={{ height: 500, width: '70%' }}
            rows={rows}
            columns={columns}
            pageSize={7}
          />
    );
  }
}

export default ManagerMembershipView;