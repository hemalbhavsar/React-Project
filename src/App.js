import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container , Row , Col, Navbar , Nav , NavDropdown , Carousel , Image } from 'react-bootstrap';


function App() {
  return (
    <div>
      <div className="navigation">
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand href="#home"><Image src="assets/images/logo.png" className="d-block w-100"></Image></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      </div>
      <Carousel fade>
        <Carousel.Item>
          <Image src="https://dummyimage.com/1920x500/333/fff.png&text=Banner+Image1" className="d-block w-100"></Image>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://dummyimage.com/1920x500/333/fff.png&text=Banner+Image2" className="d-block w-100"></Image>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://dummyimage.com/1920x500/333/fff.png&text=Banner+Image3" className="d-block w-100"></Image>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
