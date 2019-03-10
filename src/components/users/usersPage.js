import React from "react";
import {Container} from "react-bootstrap";
import UserForm from './searchForm'
import {connect} from "react-redux";

class usersPage extends React.Component{
  performSearch(event){
    event.preventDefault();
    const action = {
      type: 'SEARCH_USER'
    };
    this.props.dispatch(action)
  }
  render() {
    return <Container>
      {UserForm()}

    </Container>
  }
}

const mapStateToProps = ()=>{
  return {

  }
};

export default connect(mapStateToProps)(usersPage)