import { Component } from 'react';
import * as React from 'react';
import './Home.css';


class Footer extends Component {
   
    render() {
        return (
            <div id="footer">
                <img alt="footer" src="https://pillgoodimagebucket.s3.ap-northeast-2.amazonaws.com/logo/logologo.png"/>
                <div className="copyright">
                    @2021 PILLGOOD, All rights reserved. copyright by team4.
                </div>
            </div>
        );
    }
}

export default Footer;