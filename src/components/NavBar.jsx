import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Link to="/">inicio</Link>
                <Nav className="me-auto">
                    <Link to="/new" className="nav-link">Home</Link>
                    {/* <Nav.Link href="#home">Home</Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar;