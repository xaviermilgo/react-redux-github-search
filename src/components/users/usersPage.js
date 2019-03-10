import React from "react";
import {Container, Row} from "react-bootstrap";
import UserForm from './searchForm'
import {connect} from "react-redux";
import UserListing from "./listing";

class usersPage extends React.Component{
  performSearch(event){
    event.preventDefault();
    const action = {
      type: 'SEARCH_USER'
    };
    this.props.dispatch(action)
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