import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import navIcon from '../../images/eye-logo.png'
import './NavSpace.css'
const NavSpace = () => {
    const { users, logOut } = useAuth();
    return (
        <>
            <Navbar className='px-5 bg-nav' expand="lg" sticky="top" variant="dark">
                <Navbar.Brand href="/">
                    <img className='img-fluid logo-img' src={navIcon} alt="" />
                </Navbar.Brand>
                <Link className='fw-bold text-decoration-none home-color text-warning' to="/">Eye Care Center</Link>
                <Navbar.Toggle aria-controls="navbarScroll" className='bg-warning' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/home">
                            <NavLink className='text-warning text-decoration-none' to="/home">Home</NavLink>
                        </Nav.Link>
                        <Nav.Link href="/about">
                            <NavLink className='text-warning text-decoration-none' to="/about">About Us</NavLink>
                        </Nav.Link>
                        <Nav.Link href="/contact">
                            <NavLink className='text-warning text-decoration-none' to="/contact">Contact</NavLink>
                        </Nav.Link>
                        {users.email ?
                            <Nav.Link>
                                <a className='text-warning text-decoration-none text-danger' onClick={logOut} href="/login">Log Out</a>
                            </Nav.Link>
                            :
                            <Nav.Link href="/login">
                                <NavLink className='text-warning text-decoration-none' to="/login">Login</NavLink>
                            </Nav.Link>
                        }
                        {
                            users?.email &&
                            <Nav.Link>
                                <span className='user-name'>{users.displayName}</span>
                            </Nav.Link>
                        }
                        <Nav.Link>
                            <img className='user-img img-fluid' src={users.photoURL} alt="" />
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </>
    );
};

export default NavSpace;