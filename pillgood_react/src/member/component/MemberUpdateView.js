import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

class MemberUpdateView extends Component {
    render() {
        const { member, onSetProps, onUpdate, onFileInput } = this.props;

        return (
            <div>
                <dl>
                    <dt>이미지</dt>
                    <dd>
                        <input
                            type="file"
                            name="image"
                            onChange={(e) => onFileInput(e)}
                        />
                    </dd>
                </dl>
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
                        {member.name === "" ? "이름이 들어가요" : member.name}
                    </dd>
                </dl>
                <dl>
                    <dt>연락처</dt>
                    <dd>
                        <input
                            type="text"
                            name="phone"
                            value={member.phone}
                            onChange={(e) =>
                                onSetProps(e.target.name, e.target.value)
                            }
                        />
                    </dd>
                </dl>
                <dl>
                    <dt>소개글</dt>
                    <dd>
                        <textarea
                            name="intro"
                            value={member.intro}
                            onChange={(e) =>
                                onSetProps(e.target.name, e.target.value)
                            }
                        />
                    </dd>
                </dl>
                <input
                    type="button"
                    value="저장하기"
                    onClick={() => {
                        onUpdate();
                        this.props.history.push("/member");
                    }}
                />
            </div>
        );
    }
}

export default withRouter(MemberUpdateView);
