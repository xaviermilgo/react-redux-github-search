import React from "react";
import {Container, Row} from "react-bootstrap";
import UserForm from './searchForm'
import {connect} from "react-redux";
import UserListing from "./listing";
import {SEARCH_ACTION_THUNK} from "../../actions/githubSearchActions";
import Alert from "react-bootstrap/Alert";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";

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
      {this.props.isFetching?
      <Alert variant={'info'}>
        <FontAwesomeIcon icon={faCircleNotch} spin={true}/>&nbsp;
        Loading ...
      </Alert>:''}
      <div>{UserListing(this)}</div>
    </Container>
  }
}

const mapStateToProps = (state)=>{
  console.log(state);
  return {
    users: state.search.users,
    isFetching: state.search.isFetching,
    hasError: state.search.hasError
  }
};

export default connect(mapStateToProps)(usersPage)