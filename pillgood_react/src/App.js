import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./layout/Home";
import MemberMainPage from "./pages/MemberMainPage";
import UserJoinPage from "./user/pages/UserJoinPage";
import UserLoginPage from "./user/pages/UserLoginPage";


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/member" component={MemberMainPage} />
                    <Route exact path="/user/join/" component={UserJoinPage} />
                    <Route exact path="/user/login" component={UserLoginPage} />
                </Switch>
            </Router>
        );
    }
}

export default App;
