import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./layout/Home";
import NavBar from "./NavBar";


import UserJoinPage from "./user/pages/UserJoinPage";
import UserLoginPage from "./user/pages/UserLoginPage";

import MemberMainPage from "./member/pages/MemberMainPage";

import UserListPage from "./instructor/pages/UserListPage";

import ManagerMainPage from "./manager/pages/ManagerMainPage";
import ManagerLecDetailPage from "./manager/pages/ManagerLecDetailPage";
import ManagerLecUpdatePage from "./manager/pages/ManagerLecUpdatePage";
import ManagerMemberShipCreatePage from "./manager/pages/ManagerMemberShipCreatePage";
import ManagerUserDetailPage from "./manager/pages/ManagerUserDetailPage";

import MembershipMainPage from "./membership/pages/MembershipMainPage";
import PayPage from "./membership/pages/PayPage";

import LecDetailPage from "./lec/pages/LecDetailPage";
import LecMainPage from "./lec/pages/LecMainPage";
import BookCreatePage from "./lec/pages/BookCreatePage"

import QnaMainPage from "./qna/pages/QnaMainPage";
import QnaDetailPage from "./qna/pages/QnaDetailPage";
import QnaCreatePage from "./qna/pages/QnaCreatePage";
import QnaUpdatePage from "./qna/pages/QnaUpdatePage";
import QnaAnswerPage from "./qna/pages/QnaAnswerPage";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/" component={Home} />

                        {/* user */}
                        <Route exact path="/user/join/" component={UserJoinPage} />
                        <Route exact path="/user/login" component={UserLoginPage} />

                        {/* member */}
                        <Route path="/member" component={MemberMainPage} />
                        {/* <Route exact path="/member/info" component={MemberInfoPage} />
                        <Route
                            exact
                            path="/member/update"
                            component={MemberUpdatePage}
                        />
                        <Route
                            exact
                            path="/member/passwordupdate"
                            component={MemberPasswordUpdatePage}
                        />
                        <Route
                            exact
                            path="/member/delete"
                            component={MemberDeletePage}
                        />
                        <Route
                            exact
                            path="/member/paylist"
                            component={MemberPayListPage}
                        />
                        <Route
                            exact
                            path="/member/refund/:id"
                            component={MemberPayRefundPage}
                        />
                        <Route
                            exact
                            path="/member/book"
                            component={MemberBookListPage}
                        /> */}

                        {/* instructor */}
                        <Route
                            path="/instructor/"
                            component={MemberMainPage}
                        />
                        {/* <Route
                            exact
                            path="/instructor/lec/:id"
                            component={InstructorLecPage}
                        />
                        <Route
                            exact
                            path="/instructor/create"
                            component={LecCreatePage}
                        /> */}
                        <Route
                            exact
                            path="/instructor/user/:id"
                            component={UserListPage}
                        />

                        {/* manager */}
                        <Route
                            path="/manager"
                            component={ManagerMainPage}
                        />
                        {/* <Route
                            exact
                            path="/manager/user/"
                            component={ManagerUserPage}
                        /> */}
                        <Route
                            exact
                            path="/manager/user/:id"
                            component={ManagerUserDetailPage}
                        />
                        {/* <Route
                            exact
                            path="/manager/lec/"
                            component={ManagerLecPage}
                        /> */}
                        <Route
                            exact
                            path="/manager/lec/:id"
                            component={ManagerLecDetailPage}
                        />
                        <Route
                            exact
                            path="/manager/lec/update/:id"
                            component={ManagerLecUpdatePage}
                        />
                        {/* <Route
                            exact
                            path="/manager/membership/"
                            component={ManagerMembershipPage}
                        /> */}
                        <Route
                            exact
                            path="/manager/membership/create/"
                            component={ManagerMemberShipCreatePage}
                        />

                        {/* membership */}
                        <Route
                            exact
                            path="/membership"
                            component={MembershipMainPage}
                        />
                        <Route exact path="/membership/pay" component={PayPage} />

                        {/* lec */}
                        <Route
                            exact
                            path="/lec"
                            component={LecMainPage}
                        />
                        <Route
                            exact
                            path="/lec/:id"
                            component={LecDetailPage}
                        />
                        <Route
                            exact
                            path="/lec/create/book/:id"
                            component={BookCreatePage}
                        />

                        {/* qna */}
                        <Route exact path="/qna" component={QnaMainPage} />
                        <Route
                            exact
                            path="/qna/detail/:id"
                            component={QnaDetailPage}
                        />
                        <Route
                            exact
                            path="/qna/create/"
                            component={QnaCreatePage}
                        />
                        <Route
                            exact
                            path="/qna/update/:id"
                            component={QnaUpdatePage}
                        />
                        <Route
                            exact
                            path="/qna/answer/:id"
                            component={QnaAnswerPage}
                        />
                    </Switch>
                </Router>
            </div>    
        );
    }
}

export default App;