import React from "react";
import {connect} from "react-redux";
import Alert from "react-bootstrap/Alert";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";
import Paginator from "../../utils/pagination";
import user_thunks from "../../../actions/githubUserActions";
import UserListing from "../listing";

class Followers extends React.Component{
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.dispatch_event();
    }
  }
  componentDidMount() {
    this.dispatch_event();
  }
  dispatch_event() {
    let username = this.props.match.params.username;
    this.props.dispatch(user_thunks.fetch_user_followers(username, 0, 100))
  }

  render() {
    if(this.props.isFetching){
      return <Alert variant='info' className={'mt-2 mx-2'}>
        <FontAwesomeIcon icon={faCircleNotch} spin={true}/>
        &nbsp;&nbsp;Loading ...
      </Alert>
    }
    return (
        <Paginator className='repos pt-3' per_page={24}>
          {UserListing(this).props.children}
        </Paginator>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    users: state.user.followers.followers,
    isFetching: state.user.followers.isFetching,
    hasError: state.user.followers.hasError
  }
};

export default connect(mapStateToProps)(Followers);