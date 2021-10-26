import React, { Component } from 'react';
import { observer } from 'mobx-react'
import ManagerStore from '../store/ManagerStore';
import ManagerMembershipView from '../component/ManagerMembershipView';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

class ManagerMembershipContainer extends Component {
  managerStore = ManagerStore;

  componentDidMount() {
    this.managerStore.selectMembershipAll();
  }

  render() {
    const columns = [
      { field: 'number', headerName: '횟수', width: 120 },
      { field: 'period', headerName: '기간', width: 120 },
      { field: 'price', headerName: '가격', width: 200 },
      { field: 'type', headerName: '인원', width: 120 },
      { field: 'status', headerName: '상태', width: 120 },
      {
        field: "change", headerName: '변경', width: 150,
        renderCell: (cellValues) => {
          return (
            <button onClick={(event) => {accessMembership(cellValues.row.id, cellValues.row.status)}}>변경</button>
          );
        }
      }
    ];
    const { memberships, membershipFilter, accessMembership, changeMembershipFilter } = this.managerStore;
    const rows = [];
    const formatter = new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'KRW',});
    // const membershipList = memberships && memberships.map((membership) => {
    //   return (
    //     <span key={membership.membership_id}><ManagerMembershipView key={membership.membership_id} membership={membership} />
    //     {membership.status === 1 ? <button onClick={()=>accessMembership(membership.membership_id, membership.status)}>비활성</button>: 
    //             membership.status === 2 ? <button onClick={()=>accessMembership(membership.membership_id, membership.status)}>활성</button> :
    //             '변경불가'}</span>
    //   )
    // });
    // memberships.forEach((membership) => {
    //   if (membershipFilter === '1') {
    //     if (membership.status === 2) return;
    //     rows.push(
    //       <ManagerMembershipView key={membership.id} membership={membership} accessMembership={accessMembership} />
    //     )
    //   }
    //   else if (membershipFilter === '2') {
    //     if (membership.status === 1) return;
    //     rows.push(
    //       <ManagerMembershipView key={membership.id} membership={membership} accessMembership={accessMembership} />
    //     )
    //   }
    //   else {
    //     rows.push(
    //       <ManagerMembershipView key={membership.id} membership={membership} accessMembership={accessMembership} />
    //     )
    //   }
    memberships.forEach((membership) => {
      if (membershipFilter === '1') {
        if (membership.status === 2) return;
        rows.push(
          { id: membership.membership_id, number: (membership.number?membership.number+"회":""), 
          period:(membership.period?membership.period+"일":""), 
          price:(membership.price?(formatter.format(membership.price)): ""), 
          type:(membership.type?membership.type+"인" : ""), 
          status:(membership.status?"활성":"") }
        );
      }
      else if (membershipFilter === '2') {
        if (membership.status === 1) return;
        rows.push(
          { id: membership.membership_id, number: (membership.number?membership.number+"회":""), 
          period:(membership.period?membership.period+"일":""), 
          price:(membership.price?(formatter.format(membership.price)): ""), 
          type:(membership.type?membership.type+"인" : ""), 
          status:(membership.status?"비활성":"")  }
        );
      }
      else {
        rows.push(
          { id: membership.membership_id, number: (membership.number?membership.number+"회":""),
          period:(membership.period?membership.period+"일":""), 
          price:(membership.price?(formatter.format(membership.price)): ""),
          type:(membership.type?membership.type+"인" : ""), 
          status:(membership.status===1?"활성":"비활성")  }
        );
      }


    });
    return (
      <div style={{width: '60%', margin: '30px auto'}}>
        <h2 style={{textAlign:'center', color:'#574934'}} >멤버쉽 목록</h2>
          {/* <select name="status" id="status" value={membershipFilter}
            onChange={(e) => changeMembershipFilter(e.target.value)}>
            <option value="0">--활성 여부--</option>
            <option value="1">활성</option>
            <option value="2">비활성</option>
          </select><br /> */}
          <Box sx={{ minWidth: 120 }}>
          <FormControl >
            <NativeSelect
              defaultValue={0}
              onChange={(e) => changeMembershipFilter(e.target.value)}
              inputProps={{
                name: 'status',
                id: 'status',
              }}
            >
              <option value={0}>전체</option>
              <option value={1}>활성</option>
              <option value={2}>비활성</option>
            </NativeSelect>
          </FormControl>
        </Box>
          <ManagerMembershipView columns = {columns} rows = {rows} />
        {/* <table>
          <thead>
            <tr>
              <th>횟수</th>
              <th>기간</th>
              <th>가격</th>
              <th>인원</th>
              <th>상태</th>
              <th>변경</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.length ? (
              rows)
              : (
                <tr>
                  <td colSpan='6'>멤버쉽 목록이 없습니다 :(</td>
                </tr>
              )}
          </tbody>
        </table> */}
      </div>
    );
  }
}

export default observer(ManagerMembershipContainer);