import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./layout/Home";
import ManagerLecDetailPage from "./manager/pages/ManagerLecDetailPage";
import ManagerLecPage from "./manager/pages/ManagerLecPage";
import ManagerLecUpdatePage from "./manager/pages/ManagerLecUpdatePage";
import ManagerMemberShipCreatePage from "./manager/pages/ManagerMemberShipCreatePage";
import ManagerMembershipPage from './manager/pages/ManagerMembershipPage';
import ManagerUserDetailPage from "./manager/pages/ManagerUserDetailPage";
import ManagerUserPage from './manager/pages/ManagerUserPage';


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/manager/user/" component={ManagerUserPage} />
                    <Route exact path="/manager/user/:id" component={ManagerUserDetailPage} />

                    <Route exact path="/manager/lec/" component={ManagerLecPage} />
                    <Route exact path="/manager/lec/:id" component={ManagerLecDetailPage} />
                    <Route exact path="/manager/lec/update/:id" component={ManagerLecUpdatePage} />

                    <Route exact path="/manager/membership/create/" component={ManagerMemberShipCreatePage} />
                    <Route exact path="/manager/membership/" component={ManagerMembershipPage} />

                </Switch>
            </Router>
        );
    }
}

export default App;
