import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <NavbarBrand href="/">FAHRUL FREE FILMS</NavbarBrand>
          <Nav>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
