import React, { Component } from 'react';

class MemberView extends Component {
    render() {
        const {member} = this.props;

        return (
            <div>
                {member.name}
                <br />
                {member.phone}
                <br />
                {member.intro}
                <br />
                {member.type === 1
                    ? "관리자"
                    : member.type === 2
                    ? "강사"
                    : member.type === 3
                    ? "회원"
                    : "비회원"}
            </div>
        );
    }
}

export default MemberView;