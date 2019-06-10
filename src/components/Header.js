import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Link } from 'gatsby-plugin-i18next';
import { Navbar, Nav } from 'react-bootstrap';

import LanguageSelector from './LanguageSelector';

class Header extends Component {
  static propTypes = {
    siteTitle: PropTypes.string.isRequired,
    t: PropTypes.string
  };

  static defaultProps = {
    siteTitle: '',
    t: ''
  };

  render() {
    const { t } = this.props;

    return (
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-5">
        <Navbar.Brand as={Link} to="/">
          {this.props.siteTitle}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" activeClassName="active">
              {t('home')}
            </Nav.Link>
            <Nav.Link as={Link} to="/about" activeClassName="active">
              {t('about_us')}
            </Nav.Link>
            <Nav.Link
              href="https://github.com/gusta-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Nav.Link>
          </Nav>
          <LanguageSelector />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default translate()(Header);
