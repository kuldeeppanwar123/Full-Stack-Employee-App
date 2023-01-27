// import { Component } from "react";
import { Container,Alert } from "react-bootstrap";

export function Home(){
    return(
        <>
          <Container className="mt-5 text-center">
            <Alert variant="success">Welcome to Employee Management System</Alert>
            <p>you can perform CRUD operation</p>
          </Container>
        </>
    )
}


// export class Home extends Component{
//     render(){
//         return(
//             <>
//             <h1>home page</h1>
//           {/* <Container className="mt-5 text-center">
//             <Alert variant="success">Welcome to Employee Management System</Alert>
//             <p>you can perform CRUD operation</p>
//           </Container> */}
//             </>
//         )
//     }
// }