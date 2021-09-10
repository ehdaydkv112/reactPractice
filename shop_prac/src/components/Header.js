import { Navbar, Container, Nav  } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';

const Header = (props) => {

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>LoveLove</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/"> Home  </Nav.Link>
          <Nav.Link as={Link} to="/detail"> Detail </Nav.Link>
          <Nav.Link as={Link} to="/"> etc </Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )

};

export default Header;