import React from "react";
import {connect} from "react-redux";
import {Card, Col} from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch, faCodeBranch, faEye, faStar} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import Paginator from "../../utils/pagination";
import user_thunks from "../../../actions/githubUserActions";

class Repos extends React.Component{
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.dispatch_event();
    }
  }
  componentDidMount() {
    this.dispatch_event();
  }
  dispatch_event(){
    let username = this.props.match.params.username;
    this.props.dispatch(user_thunks.fetch_user_repo_info(username))
  }
  static trimDesc(desc){
    if(desc==null){
      return null
    }
    return desc.length>85?desc.substr(0, 85)+'...':desc
  }
  render() {
    if(this.props.isFetching){
      return <Alert variant='info' className={'mt-2 mx-2'}>
        <FontAwesomeIcon icon={faCircleNotch} spin={true}/>
        &nbsp;&nbsp;Loading ...
      </Alert>
    }
    return (
        <Paginator className='repos pt-3' per_page={12}>
          {this.props.userRepos.map(repo=>
            <Col lg={3} md={4} sm={6} xs={12} key={repo.node_id} className='pb-2'>
              <div className='m-1 border rounded w-100 h-100 repocard'>
                <a href={repo.html_url} target='_blank' rel="noopener noreferrer" className='repo-link'>
                  <Card.Header>
                    <Card.Subtitle className='m-0 text-capitalize text-truncate text-dark font-weight-bold'>
                      {repo.name}
                    </Card.Subtitle>
                  </Card.Header>
                </a>
                <Card.Body className='p-2 small'>
                  <div className='repodesc'>{Repos.trimDesc(repo.description)}</div>
                </Card.Body>
                <div className='scout'>
                  <div className='p-0 m-0 small pt-2'>
                    created:&nbsp;<span className='font-weight-bold'>{moment(repo.created_at).fromNow()}</span>
                  </div>
                  <div className='p-0 m-0 small'>updated: {moment(repo.updated_at).fromNow()}</div>
                  <Card.Footer className='p-1 text-center'>
                      <span className='border-right p-2 d-inline-block'>
                        <span className='pr-2'>{repo.star}</span>
                        <FontAwesomeIcon icon={faStar} className='m-0 h6'/>
                      </span>
                    <span className='border-right p-2 d-inline-block'>
                        <span className='pr-2'>{repo.watchers}</span>
                        <FontAwesomeIcon icon={faEye} className='m-0 h6'/>
                      </span>
                    <span className='p-2 d-inline-block'>
                        <span className='pr-2'>{repo.forks}</span>
                        <FontAwesomeIcon icon={faCodeBranch} className='m-0 h6'/>
                      </span>
                  </Card.Footer>
                </div>
                <div className='ending'>
                  <div className='m-0 small px-2'>
                    created:&nbsp;<span>{moment(repo.created_at).fromNow()}</span>
                  </div>
                  <div className='m-0 small px-2 pb-1'>updated: {moment(repo.updated_at).fromNow()}</div>
                  <Card.Footer className='p-1 text-center'>
                      <span className='border-right p-2 d-inline-block'>
                        <span className='pr-2'>{repo.stargazers_count}</span>
                        <FontAwesomeIcon icon={faStar} className='m-0 h6 text-dark'/>
                      </span>
                    <span className='border-right p-2 d-inline-block'>
                        <span className='pr-2'>{repo.watchers}</span>
                        <FontAwesomeIcon icon={faEye} className='m-0 h6 text-dark'/>
                      </span>
                    <span className='p-2 d-inline-block'>
                        <span className='pr-2'>{repo.forks}</span>
                        <FontAwesomeIcon icon={faCodeBranch} className='m-0 h6 text-dark'/>
                      </span>
                  </Card.Footer>
                </div>
              </div>
            </Col>
          )}
        </Paginator>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    userRepos: state.user.repos.userRepos,
    isFetching: state.user.repos.isFetching,
    hasError: state.user.repos.hasError
  }
};

export default connect(mapStateToProps)(Repos);