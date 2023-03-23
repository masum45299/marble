import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{background:"#e5e5e5"}} variant="dark">
      <Container>
      <Link className='logo' to={"/Home"}>MARBLE</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='NavBar'>
            <NavLink to={"/Home"}>Home</NavLink>
            <NavLink to={"/About"}>About</NavLink>
            <NavLink to={"/Journal"}>Journal</NavLink>
            <NavLink to={"/Service"}>Service</NavLink>
            <NavLink to={"/Features"}>Features</NavLink>
            <NavLink to={"/Contact"}>Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;