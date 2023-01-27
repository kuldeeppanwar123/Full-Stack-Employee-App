import{Navbar, Nav, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
// import { fetchAllEmployees } from '../services/FetchAllEmployee'

export function NavigationBar(){
  return(
    <>
     <Navbar bg="dark" variant="dark">
      <Container>
        <LinkContainer  to='/'>
            <Navbar.Brand >Employee App</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to='/Home'><Nav.Link >Home</Nav.Link></LinkContainer>
            <LinkContainer to='/registration'><Nav.Link >Registration</Nav.Link></LinkContainer>
            <LinkContainer to='/employee-list'><Nav.Link >Employee-List</Nav.Link></LinkContainer>
            <LinkContainer to='/fetch-by-name'><Nav.Link >FindByName</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <h1>kuldeep</h1> */}
    </>
  )
}