import React from "react";
import {Form, Col} from "react-bootstrap";
import {Button, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faEnvelope, faIdBadge, faSearch} from "@fortawesome/free-solid-svg-icons";

export default UserForm => <Form onSubmit={e=>this.performSearch(e)}>
  <Form.Row>
    <Form.Group as={Col} lg="4" sm="6">
      <Form.Label>Username</Form.Label>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faAt} />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control type="text" placeholder="username"/>
      </InputGroup>
    </Form.Group>
    <Form.Group as={Col} lg="4" sm="6">
      <Form.Label>Email</Form.Label>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faEnvelope} />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control type="email" placeholder="Email"/>
      </InputGroup>
    </Form.Group>
    <Form.Group as={Col} lg="4" sm="6">
      <Form.Label>Name</Form.Label>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faIdBadge} />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control type="email" placeholder="Name"/>
      </InputGroup>
    </Form.Group>
  </Form.Row>
  <Button type={"submit"} variant={"outline-success"} className={"float-right"}>
    Search <FontAwesomeIcon icon={faSearch}/>
  </Button>
</Form>