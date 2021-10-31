import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Headers.css';
const Headers = () => {
    const { user, logOut } = useAuth()
    return (
        <div>

            <Navbar className="nav-menu" sticky="top" collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand ><span className=" fw-bold">
                    <i className="fas  fa-swimming-pool"></i>  Dream World</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/About">About</Nav.Link>

                            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                            {
                                user.displayName || user.email ? <Nav.Link as={Link} to="/myBookings">My Bookings</Nav.Link> : ''
                            }
                        </Nav>
                        <Nav className="ms-auto">
                        {user.displayName || user.email ?
                        <NavDropdown title="Dashboard" id="collasible-nav-dropdown">

                        <NavDropdown.Item href="#action/3.2">{
                            user.displayName || user.email ? <Nav.Link className="text-dark" as={Link} to="/manageAllBookings">Manage All Bookings</Nav.Link> : ''
                        }</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">  {
                            user.displayName || user.email ? <Nav.Link className="text-dark" as={Link} to="/addNewPackage">Add a new Package</Nav.Link> : ''
                        }</NavDropdown.Item>

                    </NavDropdown>:''}
                            
                        </Nav>
                        <Nav>
                            {/* {
                              user.displayName ||  user.email ? <Nav.Link as={Link} to="/myBookings">My Bookings</Nav.Link>:''
                          } */}
                            {/* {
                              user.displayName ||  user.email ? <Nav.Link as={Link} to="/manageAllBookings">Manage All Bookings</Nav.Link>:''
                          } */}
                            {/* {
                              user.displayName ||  user.email ? <Nav.Link as={Link} to="/addNewPackage">Add a new Package</Nav.Link>:''
                          } */}

                            <span className="p-2 text-white">
                                {
                                    user.displayName || user.email ? <span className="p-2 text-white">  {user.displayName} </span> : ''

                                    // user.displayName ||  user.email ?  user.displayName ? user.displayName : user.email.substring(0, user.email.lastIndexOf("@")) : ""
                                }
                            </span>

                            {
                                user.displayName || user.email ? <button onClick={logOut}>  Log out</button> : <Nav.Link as={Link} to="/Login">
                                    Sign in
                                </Nav.Link>
                            }


                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Headers;