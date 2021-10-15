import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./layout/Home";
import LecMainPage from "./lec/pages/LecMainPage";
import BookPage from "./lec/pages/Bookpage";
import LecDetailPage from './lec/pages/LecDetailPage';
import LecCreatePage from "./instructor/pages/LecCreatePage";
import InstructorLecPage from "./instructor/pages/InstructorLecPage";
import LecModifyPage from  "./instructor/pages/LecModifyPage";
import UserListPage from "./instructor/pages/UserListPage";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/lec" component={LecMainPage} />
                    <Route exact path ="/lec/:id" component={LecDetailPage} />
                    <Route exact path ="/lec/book/:id" component={BookPage} />
                    <Route exact path ="/instructor/lec/create" component={LecCreatePage} />
                    <Route exact path ="/instructor/lec/" component={InstructorLecPage} />
                    <Route exact path ="/instructor/lec/update/:id" component={LecModifyPage} />
                    <Route exact path ="/instructor/lec/user" component={UserListPage} />
                </Switch>
            </Router>
        );
    }
}

export default App;
