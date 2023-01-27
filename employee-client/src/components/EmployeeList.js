import { Component } from "react";
import { fetchAllEmployees } from "../services/FetchAllEmployee.js";
import { Table ,Button} from "react-bootstrap";
import { RemoveEmployee } from "../services/RemoveEmployee.js";
import { EMployeeUpdate } from "./EmployeeUpdate.js";

export class EmployeeList extends Component{
    constructor(){
        super();
        this.state = {employees:[]};
    }

    async componentDidMount(){
        const response =  await fetchAllEmployees();
        this.setState({employees:response.data})
        // console.log(this.state.employees);
      }
    
    async componentDidUpdate(){
        const response =  await fetchAllEmployees();
        this.setState({employees:response.data})
    }

    render(){
        return(
              <> 
                 <Table striped bordered hover variant="success">
                    <thead border='1'>
                       <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>PHONE</th>
                        <th>SALARY</th>
                        <th>DEPARTMENT</th>
                        <th>options</th>
                       </tr>
                    </thead>
                    <tbody>
                        {
                           this.state.employees.map((e)=>{
                            return(
                            <tr>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>+91-{e.phone}</td>
                            <td>&#8377; {e.salary}</td>
                            <td>{e.department}</td>
                            <td>
                                <Button variant="success" onClick={()=>{EMployeeUpdate(e._id)}} >Update</Button>
                                <Button variant='danger' onClick={()=>{RemoveEmployee(e._id)}}>Remove</Button>
                            </td>
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