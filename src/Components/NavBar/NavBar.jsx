import { Container, Nav, Navbar } from 'react-bootstrap'
import Fluff from '/images/fluff-std-logo-big-index.png'
import LogoBrand from '/images/logo-brand-3d.png'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import Sign from '../Sign/Sing'
import AuthDetails from '../SingDetails/SignDetails'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function NavBar() {
  return (
    <header>
      <Nav>
          <Container fluid className='top-header'>
            <Link to="/contact" className='nav-link'>Contact</Link>
              <Link to="/about" className='nav-link'>About Us</Link>
              <Link to="/services" className='nav-link'>Services</Link>
              <Sign />
          </Container>
          <Container fluid className='topHeaderUser'>
            <AuthDetails />
          </Container>
          <ToastContainer />
      </Nav>
      <Navbar collapseOnSelect expand="xl" className="bg-body-tertiary" id='navbar'>
        <Container fluid className='header-one'>
          <Link to="/"><img src={Fluff} alt="Fluff image Audiolusa" className="logo-nav d-flex d-xl-none" /></Link>
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
            <Nav className='nav-first navResp'>
              <div className='brand'>
              <Link to="/" className="navbar-brand">
                <img src={LogoBrand} 
                alt="Fluff logo Audiolusa"  className="fluff" />
              </Link>
                </div>
                  <div id='navmenu'>
                    <Link to="/" className="nav-link hdr">Home</Link>
                      <Link to="/category/speakers" className="nav-link hdr">Speakers</Link>
                        <Link to="/category/headphones" className="nav-link hdr">Headphones</Link>
                          <Link to="/category/wireless" className="nav-link hdr">Wireless</Link>
                        <Link to="/services" className="nav-link hdr d-flex d-xl-none">Services</Link>                                
                      <div className="nav-link hdr d-flex d-xl-none">
                      <Sign  />
                      </div>
                  <CartWidget />
                </div>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
        <ToastContainer />
      </Navbar>
    </header>
  );
}

export default NavBar