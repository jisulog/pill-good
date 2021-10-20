import React, { Component } from "react";
import { Link } from "react-router-dom";

class MemberView extends Component {
    render() {
        const { member } = this.props;

        return (
            <div>
                <div>
                    <img src={member.image} alt="프로필사진" />
                </div>
                <div>
                    <dl>
                        <dt>
                            {member.type === 1
                                ? "관리자"
                                : member.type === 2
                                ? "강사"
                                : member.type === 3
                                ? "회원"
                                : "비회원"}
                        </dt>
                        <dd>
                            {member.name === ""
                                ? "이름이 들어가요"
                                : member.name}
                        </dd>
                    </dl>
                    <dl>
                        <dt>연락처</dt>
                        <dd id="phoneDefalut">
                            {member.phone === ""
                                ? "연락처가 들어가요"
                                : member.phone}
                        </dd>
                    </dl>
                    <dl>
                        <dt>소개글</dt>
                        <dd>
                            {member.intro === ""
                                ? "소개글이 들어가요"
                                : member.intro}
                        </dd>
                    </dl>

                    <Link to="/member/update">회원정보 수정</Link>
                    <Link to="/member/passwordupdate">비밀번호 변경</Link>
                    <Link to="/member/delete">회원 탈퇴</Link>
                </div>
            </div>
        );
    }
}

export default MemberView;
