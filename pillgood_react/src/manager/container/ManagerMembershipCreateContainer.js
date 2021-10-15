import React, { Component } from 'react';
import { observer } from 'mobx-react'
import ManagerStore from '../store/ManagerStore';

class ManagerMembershipCreateContainer extends Component {
  managerStore = ManagerStore;
  render() {
    const { membership, createMembership, setMembershipProps } = this.managerStore;
    return (
      <div>
        횟수: <input type="number" id="number" name="number" value={membership.number||""} 
        onChange={(e)=>setMembershipProps(e.target.name, e.target.value)} placeholder="횟수"/><br/>
        기간:
        <div name="period" value={membership.period} onChange={(e)=>setMembershipProps(e.target.name, e.target.value)}>
          <input type="radio" id="period10" name="period" value="10"/>
          <label htmlFor="10">10일</label>
          <input type="radio" id="period30" name="period" value="30" />
          <label htmlFor="30">30일</label>
          <input type="radio" id="period45" name="period" value="45" />
          <label htmlFor="45">45일</label>
          <input type="radio" id="period60" name="period" value="60" />
          <label htmlFor="60">60일</label>
        </div>
        가격: <input type="number" id="price" name="price" value={membership.price||""} 
        onChange={(e)=>setMembershipProps(e.target.name, e.target.value)} placeholder="가격"/><br/>
        유형:
        <div name="type"  value={membership.type} onChange={(e)=>setMembershipProps(e.target.name, e.target.value)}>
          <input type="radio" id="1" name="type" value="1" />
          <label htmlFor="1">1인</label>
          <input type="radio" id="2" name="type" value="2"/>
          <label htmlFor="2">2인</label>
          <input type="radio" id="3" name="type" value="3"/>
          <label htmlFor="8">8인</label>
        </div>
        활성
        <div name="type"  value={membership.status} onChange={(e)=>setMembershipProps(e.target.name, e.target.value)}>
          <input type="radio" id="status1" name="status" value="1"/>
          <label htmlFor="o">활성</label>
          <input type="radio" id="status2" name="status" value="2" />
          <label htmlFor="x">비활성</label>
        </div>
        <button onClick={()=>createMembership()}>추가</button>
      </div>
    );
  }
}

export default observer(ManagerMembershipCreateContainer);