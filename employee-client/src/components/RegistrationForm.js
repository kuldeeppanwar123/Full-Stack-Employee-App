import { Component } from "react";
import { Button, Row } from "react-bootstrap";
import { Container, Alert, Col, Form } from "react-bootstrap";
import { EMployeeInsert } from "../services/EmployeeInsert.js";
export class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      FormData: {},
      isInserted:false
    };
  }

  handleChanges = (eventObj) => {
    this.setState({
      FormData: {
        ...this.state.FormData,
        [eventObj.target.name]: eventObj.target.value,
      },
    });
  };

  handleSubmit =  async(eventObj) => {
     eventObj.preventDefault();
     await EMployeeInsert(this.state.FormData);
     this.setState({isInserted:true})
    //  console.log(response);
    
  };
  render() {
    return (
      <>
        <Container className="mt-5 text-center">
          <Alert variant="success">Welcome to Registration Form</Alert>
        </Container>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" name="name" onChange={this.handleChanges} />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number" placeholder="Enter age" name="age" onChange={this.handleChanges}/>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="number"placeholder="Enter phone number" name="phone" onChange={this.handleChanges}/>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicSalary">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control type="number" placeholder="Enter salary" name="salary" onChange={this.handleChanges}/>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicDepartment">
                  <Form.Label>Department</Form.Label>
                  <Form.Control type="text" placeholder="Enter department" name="department" onChange={this.handleChanges}/>
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit" className="btn btn-primary">
              Register
            </Button>
            </Form>
            {
               this.state.isInserted?
                <Container className="mt-5 text-center">
                   <Alert variant="success">Registered successfully!</Alert>
                </Container>:null   
            }
        </Container>
      </>
    );
  }
}
