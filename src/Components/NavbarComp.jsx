import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";


export default function navbarComp () {
    const navbarStyle = {
        backgroundColor: "#040e27",
        borderBottom: "2px solid #fff",
    }
    const linkStyle = {
        ":hover": {
            backgroundColor: "#fff",
            color: "#040e27",
        }
    }
    return (
        <Navbar fixed="top" variant="dark" expand="lg" style={navbarStyle}>
            <Container fluid className="px-5">
                <Navbar.Brand href="#" style={{height: "100%"}}><h3><b>Sinta .</b></h3></Navbar.Brand>
                <Navbar.Toggle id="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto mb-2 mb-lg-0">
                        <Nav.Link className="mx-auto mb-2 mb-lg-0" href="#action1" style={linkStyle}>Home</Nav.Link>
                        <Nav.Link className="mx-auto mb-2 mb-lg-0" href="#action2" style={linkStyle}>About</Nav.Link>
                        <Nav.Link className="mx-auto mb-2 mb-lg-0" href="#action2" style={linkStyle}>Work</Nav.Link>
                        <Nav.Link className="mx-auto mb-2 mb-lg-0" href="#action2" style={linkStyle}>Contact</Nav.Link>
                    </Nav>
                    <Form className="d-flex justify-content-center">
                        <Button variant="outline-light" style={linkStyle}>Let's talk</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
