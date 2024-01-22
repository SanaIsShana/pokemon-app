import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container fluid className="d-flex justify-content-center">
        <Navbar.Brand>
          <Link to="/">
            <img
              src={"../../pokemonLogoMenu.svg"}
              alt="Pokemon logo"
              height={80}
            />
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
