import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const UserListing = (element)=>
    <Row>
      {element.props.users.map(user=>
          <Col xs={4} md={3} lg={2} className={"p-1"} key={'user:'+user.login}>
            <LinkContainer to={"/users/"+user.login+'/'} exact={true}>
              <div>
              <Image
                  src={user.avatar_url}
                  height={"100%"}
                  width={"100%"}
                  thumbnail
              />
              <span>
                {user.login}
              </span>
              </div>
            </LinkContainer>
          </Col>
      )}
    </Row>
;
export default UserListing