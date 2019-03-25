import React, { Component } from 'react';
import {Router, Route, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history'
import  './App.css'
import UsersPage from './components/users/usersPage'
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap"
import Nav from "react-bootstrap/Nav";
import BreadCrumbs from "./components/utils/breadcrumbs";
import userPage from "./components/users/userPage";

class App extends Component {
  render() {
    return (
        <Router history={history}>
          <div>
            <Navbar bg={"dark"} variant={"dark"}>
              <Nav variant={"pills"} className={"w-100"}>
                <Nav.Item>
                  <LinkContainer to="/users/" exact={true}>
                    <Navbar.Brand>Github Search</Navbar.Brand>
                  </LinkContainer>
                </Nav.Item>
                <span className='m-auto'/>
                <Nav.Item className='float-right repo-link'>
                  <LinkContainer to="/users/reivhax/repos" exact={true}>
                    <Navbar.Text>About Me</Navbar.Text>
                  </LinkContainer>
                </Nav.Item>
              </Nav>
            </Navbar>
            <Route path='/:path' component={BreadCrumbs} />
            <Route path='/users/:user/:info?' component={userPage} exact={true}/>
            <Route path='/users/' component={UsersPage} exact={true}/>
            <Route path='/' exact={true} render={()=><Redirect to='/users'/>}/>
	    <Route path='/react-redux-github-search/' exact={true} render={()=><Redirect to='/users'/>}/>
          </div>
        </Router>
    );
  }
}

export default App;
