import { Component } from 'react';
import * as React from 'react';
import './Home.css';


class Home extends Component {
   
    render() {
        return (
            <div id="home">
                <span></span>
                <p id="article">
                "in 10 session you will feel the difference,<br/>
                in 20 session you will see the difference,<br/>
                in 30 session you will have a whole new body."<br/>
                <br/>
                "10회에 느낌이 달라지고,<br/>
                20회에 눈에 보이는 변화가 있을 것이며,<br/>
                30회에는 완전히 새로운 몸을 갖게 될 것 입니다."<br/>
                <br/>
                <br/>
                - 필라테스 창시자, Joseph H.Pilates -
                </p>
            </div>
        );
    }
}

export default Home;