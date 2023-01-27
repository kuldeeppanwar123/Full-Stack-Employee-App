import { Component } from "react";
import { Table,Form ,Button} from "react-bootstrap";
import { FetchEmployeeByName } from "../services/FetchEmployeeByName";

export class FindByName extends Component{
    constructor(){
        super();
        this.state = {
            name:" ",
            employees:[]}
    }
    async componentDidMount(){
        const response =  await FetchEmployeeByName();
        this.setState({employees:response.data})
        console.log(this.state.employees);
      }

      handleChanges = (eventObj) => {
        this.setState({'name':eventObj.target.value });
      };

    
      handleSubmit =  async(eventObj) => {
         eventObj.preventDefault();
         await FetchEmployeeByName(this.state.name);
         const response = await FetchEmployeeByName(this.state.name);
         this.setState({employees:response.data})
         console.log(this.state.employees);
        
      };
    render(){
        return(
            <>
              <Form onSubmit={this.handleSubmit} >
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={this.handleChanges} />
                 </Form.Group>
                 <Button type="submit" className="btn btn-primary">
                 Search
                 </Button>
              </Form>
              <Table striped bordered hover variant="success">
                    <thead border='1'>
                       <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>PHONE</th>
                        <th>SALARY</th>
                        <th>DEPARTMENT</th>
                       </tr>
                    </thead>
                    <tbody>
                        {
                           this.state.employees.map((e)=>{
                            return(
                            <tr>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.phone}</td>
                            <td>{e.salary}</td>
                            <td>{e.department}</td>
                            </tr>
                            )
                           })

                        }    
                    </tbody>
                 </Table>
            </>
        )
    }
}