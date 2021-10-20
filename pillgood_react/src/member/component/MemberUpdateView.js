import React, { Component } from "react";

class MemberUpdateView extends Component {
    render() {
        const { member, onSetProps, onUpdate } = this.props;

        return (
            <div>
                {/* <input
                    type="file"
                    name="file"
                    onChange={(e) => onFileInput(e)}
                /> */}

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
                    onClick={() => onUpdate()}
                />
            </div>
        );
    }
}

export default MemberUpdateView;