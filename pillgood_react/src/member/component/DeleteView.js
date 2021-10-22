import React, { Component } from "react";


class DeleteView extends Component {
    render() {
        const { pay, period, onDelete } = this.props;
        let html;

        if (pay.remain > 0 && period > 0) {
            html = (
                <div>
                    <p>소진되지 않은 멤버십이 존재합니다.</p>
                    <dl>
                        <dt>기간</dt>
                        <dd>
                            {pay.pay_date} ~ {pay.end_date} (잔여 : {period}일)
                        </dd>
                    </dl>
                    <dl>
                        <dt>잔여횟수</dt>
                        <dd>{pay.remain}회</dd>
                    </dl>
                    <p>모두 소진 후 탈퇴가 가능합니다.</p>
                </div>
            );
        } else {
            html = (
                <div>
                    <p>
                        소진되지 않은 멤버십이 존재하지 않습니다. <br/>
                        탈퇴하시려면 아래 버튼을 눌러주세요.
                    </p>
                    <input type="button" value="회원 탈퇴" onClick={(e)=>onDelete()}/>
                </div>
            );
        }

        return <div>{html}</div>;
    }
}

export default DeleteView;
