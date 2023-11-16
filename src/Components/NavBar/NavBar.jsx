import { Container, Nav, Navbar } from 'react-bootstrap'
import Fluff from '/images/fluff-std-logo-big-index.png'
import LogoBrand from '/images/logo-brand-3d.png'
import User from '/images/user-128.png'
import CartWidget from'../CartWidget/CartWidget'

function NavBar() {
  return (
    <header>
      <Nav>
          <Container fluid className='top-header'>
            <Nav.Link className='nav-link' href="./pages/contact.html">Contact</Nav.Link>
              <Nav.Link className='nav-link' href="./pages/about-us.html">About Us</Nav.Link>
              <Nav.Link className="nav-link" 
                href="./pages/services.html">Services</Nav.Link>
            <Nav.Link href="#!" className="nav-link navbar-user" 
            alt="login" data-bs-toggle="modal" 
            data-bs-target="#exampleModal">Sign</Nav.Link>
          </Container>
      </Nav>
      <Navbar collapseOnSelect expand="xl" className="bg-body-tertiary">
        <Container fluid className='header-one'>
          <Nav.Link href="index.html"><img src={Fluff} alt="Fluff image Audiolusa" className="logo-nav d-flex d-xl-none" /></Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span id="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 
                3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
              </svg>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container fluid>
            <Nav className='nav-first'>
              <div className='brand'>
              <Nav.Link href="index.html" className="navbar-brand">
                <img src={LogoBrand} 
                alt="Fluff logo Audiolusa"  className="fluff" />
              </Nav.Link>
                </div>
                  <div id='navmenu'>
                    <Nav.Link className="nav-link hdr" href="./index.html">Home</Nav.Link>
                      <Nav.Link className="nav-link hdr" href="./pages/speakers.html">Speakers</Nav.Link>
                        <Nav.Link className="nav-link hdr" href="./pages/headphones.html">Headphones</Nav.Link>
                          <Nav.Link className="nav-link hdr" href="./pages/wireless.html">Wireless</Nav.Link>
                        <Nav.Link className="nav-link hdr d-flex d-xl-none" href="./pages/services.html">Services</Nav.Link>                                
                      <Nav.Link href="#!" className="nav-link hdr d-flex d-xl-none">
                        <img src={User} 
                        alt="login"  className="navbar-user" data-bs-toggle="modal" data-bs-target="#exampleModal" width={35}/>
                      </Nav.Link>
                    <Nav.Link >                            
                      <input type="text" placeholder="Search" className="navbar-search" />
                    </Nav.Link>
                  <CartWidget /> 
                </div>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar