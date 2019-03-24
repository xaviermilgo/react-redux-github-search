import React from "react";
import {Col, Row} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const UserListing = (element)=>
    <Row>
      {element.props.users.map(user=>
          <Col xs={4} md={3} lg={2} className={"p-1"} key={'user:'+user.login}>
            <LinkContainer to={"/users/"+user.login+'/'} exact={true}>
              <div className={'text-center'}>
                  <div className='userImage'
                      style={
                          {
                              backgroundImage: `url(${user.avatar_url})`,
                              backgroundSize: 'cover',
                              borderRadius: '4px',
                              margin: '4px',
                              backgroundPosition: 'center',
                              width: '100%'
                          }
                      }
                  />
                  <span className='font-weight-bold small'>
                    {user.login}
                  </span>
              </div>
            </LinkContainer>
          </Col>
      )}
    </Row>
;
export default UserListing