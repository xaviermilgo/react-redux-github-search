import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history'
import RepositoriesPage from './components/repositories/repositoriesPage'
import UsersPage from './components/users/usersPage'
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap"
import Nav from "react-bootstrap/Nav";
import BreadCrumbs from "./components/utils/breadcrumbs";
import NavLink from "react-bootstrap/NavLink";

class App extends Component {
  render() {
    return (
        <Router history={history}>
          <div>
            <Navbar bg={"dark"} variant={"dark"}>
              <Nav variant={"pills"} className={"w-100"}>
                <Nav.Item>
                    <Navbar.Brand>Github Search</Navbar.Brand>
                </Nav.Item>
                <Nav.Item className={""}>
                  <LinkContainer to="/users/" exact={true}>
                    <NavLink>Users</NavLink>
                  </LinkContainer>
                </Nav.Item>

                <Nav.Item>
                  <LinkContainer to="/repositories/" exact={true}>
                    <NavLink>Repositories</NavLink>
                  </LinkContainer>
                </Nav.Item>
                <span className="w-100">.</span>
                <Nav.Item>
                  <LinkContainer to="/about/" exact={true}>
                    <Nav.Link>About</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              </Nav>
            </Navbar>
            <Route path='/:path' component={BreadCrumbs} />
            <Route path='/users/' component={UsersPage}/>
            <Route path='/repositories/' component={RepositoriesPage}/>
            {/*<Route to={'/about me/'} component={AboutMePage}/>*/}
          </div>
        </Router>
    );
  }
}

export default App;
