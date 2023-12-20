
//?Boostrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './NavBar.css'

const NavBar = () => {
  return (
<Navbar expand="lg" className="bg-body-tertiary " data-bs-theme="dark">
<Container>
  <Link to="/">Logic</Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home" className='texto'>Inicio</Nav.Link>
      <Nav.Link href="#link" className='texto'>Productos</Nav.Link>
      <NavDropdown title="Otros" id="basic-nav-dropdown" >
        <NavDropdown.Item href="#action/3.1" className=' texto'>Consultas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" className='texto'>ubicacion</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" className='texto'>Sobre nosotros</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4" className='texto-oculto'>Quejas </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  <Button variant="outline-light"><CartWidget/></Button>{' '}
</Container>
</Navbar>
  )
}

export default NavBar;

