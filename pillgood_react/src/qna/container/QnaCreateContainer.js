import React, { Component } from 'react';
import { observer } from 'mobx-react'
import QnaCreateView from '../component/QnaCreateView';

class QnaCreateContainer extends Component {

    render() {
        return (
            <div>
                <QnaCreateView />
            </div>
        );
    }
}

export default observer(QnaCreateContainer);