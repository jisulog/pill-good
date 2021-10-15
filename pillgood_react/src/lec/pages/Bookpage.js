import React, { Component } from 'react';
import BookContainer from '../container/BookContainer';

//page를 하나의 html로 생각.
class BookPage extends Component {
    render() {
        const {params} = this.props.match;
        return (
            <div>
                <BookContainer id={params.id} />
            </div>
        );
    }
}

export default BookPage;