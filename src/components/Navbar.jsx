import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Icon, Menu } from "semantic-ui-react";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <Menu secondary pointing>
      <Menu.Item as={Link} to="/" style={{ fontSize: 24 }}>
        TrulyContact
      </Menu.Item>
      {pathname === "/" && (
        <Menu.Item position="right">
          <Button as={Link} to="/contacts/create" primary icon>
            <Icon name="add"></Icon>
            Create Contact
          </Button>
        </Menu.Item>
      )}
      {pathname === "/" && (
        <Menu.Item>
          <Button as={Link} to="#" color="red" icon>
            <Icon name="log out"></Icon>
            Logout
          </Button>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Navbar;
