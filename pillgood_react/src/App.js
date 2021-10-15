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
import MemberMainPage from "./pages/MemberMainPage";
import UserJoinPage from "./user/pages/UserJoinPage";
import UserLoginPage from "./user/pages/UserLoginPage";

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
                    <Route exact path="/member" component={MemberMainPage} />
                    <Route exact path="/member/update" component={MemberUpdatePage} />
                    <Route exact path="/member/delete" component={MemberDeletePage} />
                    <Route exact path="/member/paylist" component={MemberPayListPage} />
                    <Route exact path="/member/paylist/refund" component={MemberPayRefundPage} />
                    <Route exact path="/member/book" component={MemberBookListPage} />
                    <Route exact path="/member/book/cancel" component={MemberBookCancelPage} />
                    <Route exact path="/user/join/" component={UserJoinPage} />
                    <Route exact path="/user/login" component={UserLoginPage} />
                    <Route exact path="/membership" component={MembershipMainPage} />
                    <Route exact path="/membership/pay" component={PayPage} />
                    <Route exact path="/qna" component={QnaMainPage} />
                    <Route exact path="/qna/:id" component={QnaDetailPage} />
                    <Route exact path="/qna/create/" component={QnaCreatePage} />
                    <Route exact path="/qna/update/:id" component={QnaUpdatePage} />
                    <Route exact path="/qna/answer/:id" component={QnaAnswerPage} />
                    <Route exact path="/lec" component={LecMainPage} />
                    <Route exact path ="/lec/:id" component={LecDetailPage} />
                    <Route exact path ="/lec/book/:id" component={BookPage} />
                    <Route exact path ="/instructor/lec/create" component={LecCreatePage} />
                    <Route exact path ="/instructor/lec/" component={InstructorLecPage} />
                    <Route exact path ="/instructor/lec/update/:id" component={LecModifyPage} />
                    <Route exact path ="/instructor/lec/user" component={UserListPage} />
                    <Route exact path="/lec" component={LecMainPage} />
                    <Route exact path ="/lec/:id" component={LecDetailPage} />
                    <Route exact path ="/lec/book/:id" component={BookPage} />
                    <Route exact path ="/instructor/lec/create" component={LecCreatePage} />
                    <Route exact path ="/instructor/lec/" component={InstructorLecPage} />
                    <Route exact path ="/instructor/lec/update/:id" component={LecModifyPage} />
                    <Route exact path ="/instructor/lec/user" component={UserListPage} />
                    <Route exact path="/user/join/" component={UserJoinPage} />
                    <Route exact path="/user/login" component={UserLoginPage} />
                </Switch>
            </Router>
        );
    }
}

export default App;
