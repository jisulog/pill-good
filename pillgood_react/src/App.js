import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./layout/Home";
import MemberMainPage from "./pages/MemberMainPage";


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/member" component={MemberMainPage} />
                </Switch>
            </Router>
        );
    }
}

export default App;
