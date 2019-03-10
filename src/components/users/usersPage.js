import React from "react";
import {Container, Row} from "react-bootstrap";
import UserForm from './searchForm'
import {connect} from "react-redux";
import UserListing from "./listing";
import {SEARCH_ACTION_THUNK} from "../../actions/githubActions";

class usersPage extends React.Component{
  performSearch(event){
    event.preventDefault();
    let email = this.emailInput.value,
        login = this.loginInput.value,
        name = this.nameInput.value;

    this.props.dispatch(SEARCH_ACTION_THUNK(email, login, name))
  }
  render() {
    return <Container className={"px-4"}>
      <Row>{UserForm(this)}</Row>
      <Row>{UserListing(this)}</Row>
    </Container>
  }
}

const mapStateToProps = ()=>{
  return {
    users: []
  }
};

export default connect(mapStateToProps)(usersPage)