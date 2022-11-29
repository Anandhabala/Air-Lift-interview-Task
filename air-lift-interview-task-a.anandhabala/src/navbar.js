import { Navbar, Container, Nav } from "react-bootstrap";
import "./project.css";
export default function NavBar() {
  return (
    <>
      <div id="navbarboder">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Toggle id="navbarspiner" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  className="navbar-brand"
                  activeClassName="navbar-brand--active"
                  href="#/Home"
                  title=" Home Page"
                >
                  {" "}
                  Home{" "}
                </Nav.Link>
                <Nav.Link
                  className="navbar-brand"
                  title="Create your Account"
                  href="#/CreateAccount/"
                >
                  {" "}
                  CreateAccount{" "}
                </Nav.Link>
                <Nav.Link
                  className="navbar-brand"
                  title="login in your Account"
                  href="#/Login/"
                >
                  Login{" "}
                </Nav.Link>
                <Nav.Link
                  className="navbar-brand"
                  title="Deposit in your Account"
                  href="#/Deposit/"
                >
                  Payment{" "}
                </Nav.Link>
                <Nav.Link
                  className="navbar-brand"
                  title="products in shopping"
                  href="#/Product/"
                >
                  Product{" "}
                </Nav.Link>
                <Nav.Link
                  className="navbar-brand"
                  title="Track your Transactions"
                  href="#/AllData/"
                >
                  All Data
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
