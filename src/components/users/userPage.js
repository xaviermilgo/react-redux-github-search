import React from "react";
import {connect} from "react-redux";
import {USER_ACTION_THUNK} from "../../actions/githubUserActions";
import { LinkContainer } from "react-router-bootstrap"
import Alert from "./usersPage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {Button, ButtonGroup, Card, Col, Image, Nav, Row} from "react-bootstrap";

class userPage extends React.Component{
  componentDidMount() {
    console.log(this.props);
    // if(this.props.match){
    //   let username = this.props.match.params.user;
    //   this.props.dispatch(USER_ACTION_THUNK(username))
    // }
  }

  render() {
    const user = this.props.userInfo;
    if(this.props.isFetching){
      return <Alert>
        <FontAwesomeIcon icon={faCircleNotch} spin={true}/>
        Loading ...
      </Alert>
    }
    return (
        <div className={'p-4 m-4 bg-light'}>
          <Row>
            <Col xs={12} sm={6} md={4} lg={3} className='p-4'>
              <Image
                  className={'w-100'}
                  rounded
                  src={user.avatar_url}/>
            </Col>
            <Col xs={12} sm={6} md={8} lg={9} className='p-0'>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.bio}</Card.Subtitle>
                {user.blog?
                    <Card.Link href={user.blog}>
                      Blog
                    </Card.Link>:''}
                {user.company?
                <Card.Text>
                  company:&nbsp;
                  <Card.Link href={'https://github.com/' + user.company.slice(1,)}>
                    {user.company.slice(1,)}
                  </Card.Link>
                </Card.Text>:''}
                {user.location?
                    <Card.Text>
                      <FontAwesomeIcon icon={faMapMarkerAlt}/>&nbsp;
                      {user.location}
                    </Card.Text>:''}
              </Card.Body>
            </Col>
          </Row>
          <Row>
            <Nav variant="pills">
                <Nav.Item>
                  <LinkContainer to="">
                    {user.public_repos} public repos
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    {user.public_gists} public gists
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    {user.following} Followers
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    {user.followers} Following
                  </Nav.Link>
                </Nav.Item>
            </Nav>
          </Row>
        </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    userInfo: state.user.userInfo,
    isFetching: state.user.isFetching,
    hasError: state.user.hasError
  }
};

export default connect(mapStateToProps)(userPage)