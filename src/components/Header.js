import { Link } from 'gatsby-plugin-i18next';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import LanguageSelector from './LanguageSelector';

export default class Header extends Component {
  static propTypes = {
    siteTitle: PropTypes.string.isRequired
  };

  static defaultProps = {
    siteTitle: ''
  };

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-5">
        <Navbar.Brand href="/">{this.siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/" activeClassName="active">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Link as={Link} to="/about" activeClassName="active">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/privacy" activeClassName="active">
              Privacy Policy
            </Nav.Link>
            <Nav.Item>
              <Nav.Link
                href="https://github.com/gusta-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <LanguageSelector />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
