import React from "react";
import {Container, Row} from "react-bootstrap";
import UserForm from './searchForm'
import {connect} from "react-redux";
import UserListing from "./listing";
import Alert from "react-bootstrap/Alert";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";
import user_thunks from "../../actions/githubUserActions";

class usersPage extends React.Component{
  performSearch(event){
    event.preventDefault();
    let email = this.emailInput.value,
        login = this.loginInput.value,
        name = this.nameInput.value;

    this.props.dispatch(user_thunks.search_users(email, login, name))
  }
  render() {
    return <Container className={"px-4"}>
      <Row>{UserForm(this)}</Row>
      {this.props.isFetching?
      <Alert variant={'info'}>
        <FontAwesomeIcon icon={faCircleNotch} spin={true}/>&nbsp;
        &nbsp;&nbsp; Loading ...
      </Alert>:''}
      <div>{UserListing(this)}</div>
    </Container>
  }
}

const mapStateToProps = (state)=>{
  return {
    users: state.user.search.users,
    isFetching: state.user.search.isFetching,
    hasError: state.user.search.hasError
  }
};

export default connect(mapStateToProps)(usersPage)