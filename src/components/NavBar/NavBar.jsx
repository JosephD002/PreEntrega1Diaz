
//?Boostrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './NavBar.css';

import { useGetCategories } from '../../hooks/useProducts';



const NavBar = () => {
  
   const {categories}= useGetCategories()
  return (
<Navbar expand="lg" className="bg-body-tertiary " data-bs-theme="dark">
<Container>
  <Link to="/">Logic</Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home" className='texto'>Inicio</Nav.Link>
      <Nav.Link href="#link" className='texto'>Productos</Nav.Link>
      <NavDropdown title="categorias" id="basic-nav-dropdown" >
      {
        categories.map((category,index) => {
          return (
            <NavDropdown.Item key={index}><Link key={index} to={`/category/${category}`}>{category}</Link></NavDropdown.Item>
          )
        })
      }
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  <Button variant="outline-light"><CartWidget/></Button>
</Container>
</Navbar>
  )
}

export default NavBar;

 /*{
  const {Categories} =useGetCategories()
        Categories.map((category,index) => {
          <Link key={index} to={`/category/${category}`}>{category}</Link>
        })
      }*/