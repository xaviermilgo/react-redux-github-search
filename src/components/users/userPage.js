import React from "react";
import {connect} from "react-redux";
import {LinkContainer} from "react-router-bootstrap"
import Alert from "react-bootstrap/Alert";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {Card, Col, Image, Nav, Row} from "react-bootstrap";
import {Route, Switch} from "react-router-dom";
import Repos from "./details/Repos";
import user_thunks from "../../actions/githubUserActions";
import Followers from "./details/Followers";
import Following from "./details/Following";
import Container from "react-bootstrap/Container";
import Gists from "./details/Gists";

class userPage extends React.Component{
  componentDidUpdate(prevProps) {
    if (this.props.match.params.user !== prevProps.match.params.user) {
      this.dispatch_event();
    }
  }
  componentDidMount() {
    this.dispatch_event();
  }
  dispatch_event() {
    let username = this.props.match.params.user;
    this.props.dispatch(user_thunks.fetch_user_info(username))
  }

  render() {
    const user = this.props.userInfo;
    if(this.props.isFetching){
      return <Container><Alert variant='info'>
        <FontAwesomeIcon icon={faCircleNotch} spin={true}/>
        &nbsp;&nbsp; Loading ...
      </Alert></Container>
    }
    return (
        <div className={'container bg-light pb-4'}>
          <Row>
            <Col xs={12} sm={6} md={4} lg={3} className='p-4'>
              <Image
                  className={'w-100'}
                  rounded
                  src={user.avatar_url}/>
            </Col>
            <Col xs={12} sm={6} md={8} lg={9} className='p-0'>
              <Card.Body>
                <Card.Title>{user.name?user.name:user.login}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.bio}</Card.Subtitle>
                {user.blog ?
                    <Card.Link href={user.blog} target='_blank'>
                      Blog
                    </Card.Link> : ''}
                {user.company ?
                    <Card.Text>
                      company:&nbsp;
                      <Card.Link href={'https://github.com/' + user.company.slice(1,)} target='_blank'>
                        {user.company.slice(1,)}
                      </Card.Link>
                    </Card.Text> : ''}
                {user.location ?
                    <Card.Text>
                      <FontAwesomeIcon icon={faMapMarkerAlt}/>&nbsp;
                      {user.location}
                    </Card.Text> : ''}
              </Card.Body>
            </Col>
          </Row>
          <div>
            <Nav variant="pills" fill defaultActiveKey={window.location.href.split('/').reverse()[0]}
                 className='border-bottom-0'>
              <Nav.Item>
                <LinkContainer to="repos">
                  <Nav.Link>
                    {user.public_repos} public repos
                  </Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="gists">
                  <Nav.Link>
                    {user.public_gists} public gists
                  </Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="followers">
                  <Nav.Link>
                    {user.followers} Followers
                  </Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="following">
                  <Nav.Link>
                    {user.following} Following
                  </Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
          </div>
          <Switch>
            <Route component={Repos} path={'/users/:username/repos'} exact={true}/>
            <Route component={Gists} path={'/users/:username/gists'}/>
            <Route component={Followers} path={'/users/:username/followers'}/>
            <Route component={Following} path={'/users/:username/following'}/>
          </Switch>
        </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    userInfo: state.user.info.userInfo,
    isFetching: state.user.info.isFetching,
    hasError: state.user.info.hasError
  }
};

export default connect(mapStateToProps)(userPage)