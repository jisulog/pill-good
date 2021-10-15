import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./layout/Home";
import MemberMainPage from "./pages/MemberMainPage";
import MembershipMainPage from "./membership/pages/MembershipMainPage";
import PayPage from "./membership/pages/PayPage";
import QnaMainPage from "./qna/pages/QnaMainPage";
import QnaDetailPage from "./qna/pages/QnaDetailPage";
import QnaCreatePage from "./qna/pages/QnaCreatePage";
import QnaUpdatePage from "./qna/pages/QnaUpdatePage";
import QnaAnswerPage from "./qna/pages/QnaAnswerPage";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/member" component={MemberMainPage} />
                    <Route exact path="/membership" component={MembershipMainPage} />
                    <Route exact path="/membership/pay" component={PayPage} />
                    <Route exact path="/qna" component={QnaMainPage} />
                    <Route exact path="/qna/:id" component={QnaDetailPage} />  
                    <Route exact path="/qna/create/" component={QnaCreatePage} />
                    <Route exact path="/qna/update/:id" component={QnaUpdatePage} />
                    <Route exact path="/qna/answer/:id" component={QnaAnswerPage} />
                </Switch>
            </Router>
        );
    }
}

export default App;
