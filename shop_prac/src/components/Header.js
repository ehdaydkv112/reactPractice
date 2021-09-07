import { Navbar, Container, Nav  } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';

const Header = (props) => {

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>LoveLove</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
          <Nav.Link> <Link to="/detail">Detail</Link> </Nav.Link>
          <Nav.Link> <Link to="/">etc</Link> </Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )

};

export default Header;