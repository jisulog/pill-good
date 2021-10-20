import React, { Component } from 'react';
import { observer } from 'mobx-react';
import QnaUpdateView from '../component/QnaUpdateView';
class QnaUpdateContainer extends Component {
    render() {
        return (
            <div>
                <QnaUpdateView />
            </div>
        );
    }
}

export default observer(QnaUpdateContainer);