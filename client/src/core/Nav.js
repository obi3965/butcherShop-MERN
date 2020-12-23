import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Roskilde Slagter</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Kalve Kød</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Lamme Kød</NavLink>
            </NavItem>
           
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter (Menu);