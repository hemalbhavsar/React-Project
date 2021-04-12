import { Container , Navbar , Nav , NavDropdown , Image } from 'react-bootstrap';

function Header() {
  return (
    <div>
      <div className="navigation">
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand href="/home"><Image src="images/logo.png" fluid /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/Contact">Contact Us</Nav.Link>
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
    </div>
  );
}

export default Header;
