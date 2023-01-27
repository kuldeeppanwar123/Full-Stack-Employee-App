import {  useState } from "react";
import { Button, Form, Alert, Row, Col,Container} from "react-bootstrap";
import { updateEmployee } from "../services/UpdateEmployee";

export function EMployeeUpdate(id){
      const[employee ,setEmployee] = useState({});
      const[isUpdated , setIsUpdated] = useState(false);
   

       const handleChanges = (eventObj) => {
        setEmployee({...employee , [eventObj.target.name]: eventObj.target.value})
      };
    
      const handleSubmit =  async(eventObj) => {
         eventObj.preventDefault();
        const response =  await updateEmployee(id,employee);
        setIsUpdated(true);
         console.log(response);
        
      }
        return(
            <>
              <Container className="mt-5 text-center">
          <Alert variant="success">Update Employee</Alert>
        </Container>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" name="name" onChange={handleChanges} />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number" placeholder="Enter age" name="age" onChange={handleChanges}/>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="number"placeholder="Enter phone number" name="phone" onChange={handleChanges}/>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicSalary">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control type="number" placeholder="Enter salary" name="salary" onChange={handleChanges}/>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicDepartment">
                  <Form.Label>Department</Form.Label>
                  <Form.Control type="text" placeholder="Enter department" name="department" onChange={handleChanges}/>
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit" className="btn btn-primary">
              Update
            </Button>
            </Form>
            {
               isUpdated?
                <Container className="mt-5 text-center">
                   <Alert variant="success">updated successfully!</Alert>
                </Container>:null   
            }
        </Container>
            </>
        )
}