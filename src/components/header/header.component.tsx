import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { RoutingConstants } from "../../common/routingContstants";
import { auth } from "../../firebase";
import { selectCurrentUser } from "../../redux/selectors/selectors";
import { WidgetButton } from "../shopping-cart-widget/widget-button/widget-button";
// import "./header.styles.scss";

const Header = () => {
  const [error, setError] = useState("");
  const history = useHistory();
  const user = useSelector(selectCurrentUser);

  const logout = () => {
    return auth.signOut();
  };
  const handleLogout = async () => {
    try {
      await logout();
      history.push(RoutingConstants.LOGIN);
    } catch (e) {
      setError("Whoops, failed to log out");
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className="nav-link" to={RoutingConstants.HOME}>
          Queens Park
        </Link>
        {!user ? (
          <Nav className="me-auto">
            <Link className="nav-link" to={RoutingConstants.LOGIN}>
              Login
            </Link>
            <Link className="nav-link" to={RoutingConstants.SIGNUP}>
              SignUp
            </Link>
          </Nav>
        ) : null}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {user ? (
          <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
          >
            <Link className="nav-link" to={RoutingConstants.FAVORITES}>
              Favorites
            </Link>
            <Link className="nav-link" to={RoutingConstants.UPLOAD}>
              Upload
            </Link>
            <Navbar.Text>{user.email}</Navbar.Text>
            <Button className="btn btn-primary ms-3" onClick={handleLogout}>
              Logout
            </Button>
          </Navbar.Collapse>
        ) : null}
        {user ? <WidgetButton /> : null}
      </Container>
    </Navbar>
  );
};

export default Header;
