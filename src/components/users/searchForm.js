import React from "react";
import {Form, Col} from "react-bootstrap";
import {Button, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faEnvelope, faIdBadge, faSearch, faToiletPaper} from "@fortawesome/free-solid-svg-icons";

const UserForm = (element)=> <Form onSubmit={(e)=>element.performSearch(e)} className='w-100 pb-3'>
  <Form.Row>
    <Form.Group as={Col} lg="4" sm="6">
      <Form.Label>Username</Form.Label>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faAt} />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control type="text" placeholder="username" ref={(control)=>element.loginInput=control}/>
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
        <Form.Control type="email" placeholder="Email" ref={(control)=>element.emailInput=control}/>
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
        <Form.Control type="text" placeholder="Name" ref={(control)=>element.nameInput=control}/>
      </InputGroup>
    </Form.Group>
  </Form.Row>
  <Button type={"submit"} variant={"success"} className={"ml-2 float-right"}>
    Search <FontAwesomeIcon icon={faSearch}/>
  </Button>
  <Button type={"reset"} variant={"dark"} className={"float-right"}>
    Clear <FontAwesomeIcon icon={faToiletPaper}/>
  </Button>
</Form>;

export default UserForm