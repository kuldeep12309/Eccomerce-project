import React, { useState } from "react";
import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import Theme from "../Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";


import { faCartPlus } from "@fortawesome/free-solid-svg-icons";



function NavBar() {
  const cartItems = useSelector((state) => state.cart.items);
const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  
  const expand = "md";

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar
        expand={expand}
        bg="primary"
        data-bs-theme="dark"
        className="container-fluid "
      >
        <Container fluid>
          <Navbar.Brand>Ecommerce</Navbar.Brand>

          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            onClick={handleShow}
          />

          <Navbar.Offcanvas
            show={show}
            onHide={handleClose}
            className="bg-primary"
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
            style={{ width: "50%" }}
          >
            <Offcanvas.Header closeButton className="text-white">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="ms-auto   justify-content-end  pe-5  gap-8 "
                navbarScroll
              >
                <Nav.Link 
                  as={Link}
                  to="/"
                  className="text-white "
                  onClick={handleClose}
                >
                  <FontAwesomeIcon icon={faHouse} size="lg"/>Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/products"
                  className="text-white"
                  onClick={handleClose}
                >
                  Products
                </Nav.Link>
               <Nav.Link
  as={Link}
  to="/cart"
  className="text-white position-relative"
  onClick={handleClose}
>
 Cart <FontAwesomeIcon icon={faCartPlus} size="lg"  />
  {totalQuantity > 0 && (
<span className="absolute -top-1 -right-1 bg-red-700 text-white rounded-full text-xs px-1.5 py-0.5">

  {totalQuantity}
</span>

   
  )}
</Nav.Link>
                <Nav.Link
                  as={Link}
                  to="Login"
                  className="text-white"
                  onClick={handleClose}
                >
                  Login
                </Nav.Link>
                
                
<Nav.Link  className="text-white">
  <Theme/>
</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
