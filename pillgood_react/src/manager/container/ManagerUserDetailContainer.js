import React, { Component } from 'react';
import { observer } from 'mobx-react'
import ManagerUserDetailLecView from '../component/ManagerUserLecDetailView';
import ManagerStore from '../store/ManagerStore';
import BookStore from '../../member/store/BookStore';
import PayStore from '../../member/store/PayStore';
import ManagerUserPayDetailView from '../component/ManagerUserPayDetailView';
import moment from 'moment';
import {S3_BUCKET, REGION} from '../../image/S3bucket';

class ManagerUserDetailContainer extends Component {
  managerStore = ManagerStore;
  bookStore = BookStore;
  payStore = PayStore;

  componentDidMount() {
    const { id } = this.props;
    this.managerStore.selectUser(id);
    this.bookStore.selectBookAll(id);
    this.payStore.selectMember(id);
  }

  render() {
    const today = moment().format("YY.MM.DD")
    const { user } = this.managerStore;
    const imgUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${user.image}`;
    const bookrow = [];
    const exbookrow = [];
    const { books } = this.bookStore;
    const payrow = [];
    const expayrow = [];
    const { pays } = this.payStore;
    books.forEach((book) => {
      if (moment({today}).isBefore(book.lec_id.date)){
          bookrow.push(
            <ManagerUserDetailLecView key={book.book_id} book={book} />
          );
      }
      else {
          exbookrow.push(
            <ManagerUserDetailLecView key={book.book_id} book={book} />
          );
      }
  });
  pays.forEach((pay) => {
    if (moment({today}).isBefore(pay.end_date) && pay.remain !== 0){
      payrow.push(
        <ManagerUserPayDetailView key={pay.pay_id} pay={pay} />
        );
    }
    else {
      expayrow.push(
        <ManagerUserPayDetailView key={pay.pay_id} pay={pay} />
        );
    }
});
return (
  <div>
    <h1>기본정보</h1>
    이미지:<img src={imgUrl} alt="프로필사진" width="200"/>
    이름: {user.name}<br />
    소개: {user.intro === "" ? "소개가 없습니다 :(" : user.intro}<br />
    ID: {user.email}<br />
    연락처: {user.phone}<br />
    가입일자: {moment(user.join_date).format("YY.MM.DD")}<br />
    마지막 접속일자: {user.last_login === null ? "기록이 없습니다 :(" : moment(user.last_login).format("YY.MM.DD")}
    <h1>예약정보</h1>
    <table>
      <thead>
        <tr>
          <th>강의명</th>
          <th>날짜</th>
          <th>시간</th>
          <th>장소</th>
          <th>예약인원</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
            {bookrow.length ? (
              bookrow)        
            : (
              <tr>
                <td colSpan='3'>회원 목록이 없습니다 :(</td>
              </tr>
            )}
          </tbody>
      {/* <tbody>
        {bookList.length ? (
          bookList
        ) : (
          <tr>
            <td colSpan='7'>강의 예약 및 진행 내역이 존재하지 않습니다.</td>
          </tr>
        )}
      </tbody> */}
    </table>
    <h3>만료된 예약</h3>
    <table>
      <thead>
        <tr>
          <th>강의명</th>
          <th>날짜</th>
          <th>시간</th>
          <th>장소</th>
          <th>예약인원</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
            {exbookrow.length ? (
              exbookrow)        
            : (
              <tr>
                <td colSpan='3'>예약 목록이 없습니다 :(</td>
              </tr>
            )}
          </tbody>
    </table>
    <h1>멤버쉽정보</h1>
    <table>
      <thead>
        <tr>
          <th>결제일</th>
          <th>유형</th>
          <th>만료일</th>
          <th>잔여횟수</th>
          <th>결제방식</th>
          <th>가격</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        {payrow.length ? (
          payrow
        ) : (
          <tr>
            <td colSpan='7'>멤버십 결제내역이 존재하지 않습니다.</td>
          </tr>
        )}
      </tbody>
    </table>
    <h3>만료된 멤버쉽</h3>
    <table>
      <thead>
        <tr>
          <th>결제일</th>
          <th>유형</th>
          <th>만료일</th>
          <th>잔여횟수</th>
          <th>결제방식</th>
          <th>가격</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        {expayrow.length ? (
          expayrow
        ) : (
          <tr>
            <td colSpan='7'>멤버십 결제내역이 존재하지 않습니다.</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);
  }
}

export default observer(ManagerUserDetailContainer);