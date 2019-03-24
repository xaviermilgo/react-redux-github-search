import React from "react";
import {connect} from "react-redux";
import Alert from "react-bootstrap/Alert";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";
import Paginator from "../../utils/pagination";
import user_thunks from "../../../actions/githubUserActions";
import Gist from "./Gist";

class Gists extends React.Component{
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
    this.props.dispatch(user_thunks.fetch_user_gists(username, 0, 100))
  }
  render() {
    if(this.props.isFetching){
      return <Alert variant='info' className={'mt-2 mx-2'}>
        <FontAwesomeIcon icon={faCircleNotch} spin={true}/>
        &nbsp;&nbsp;Loading ...
      </Alert>
    }
    console.log(this.props.gists);
    return (
        <Paginator className='repos pt-3' per_page={4}>
          {this.props.gists.map(gist=>
              <Gist gist={gist} key={gist.node_id}/>
          )}
        </Paginator>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    gists: state.user.gists.gists,
    isFetching: state.user.gists.isFetching,
    hasError: state.user.gists.hasError
  }
};

export default connect(mapStateToProps)(Gists);