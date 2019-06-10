import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ButtonGroup, Button, Dropdown } from 'react-bootstrap';
import { Language, Link } from 'gatsby-plugin-i18next';

export class PureLanguageSelector extends Component {
  static propTypes = {
    changeLng: PropTypes.func,
    lng: PropTypes.string,
    availableLngs: PropTypes.arrayOf(PropTypes.string)
  };

  render() {
    const { availableLngs, lng, changeLng } = this.props;

    return (
      <ButtonGroup>
        <Button variant="dark" as={Link} key="i18n" to="/i18n">
          i18n
        </Button>
        <Dropdown as={ButtonGroup} flip="true">
          <Dropdown.Toggle>{lng}</Dropdown.Toggle>
          <Dropdown.Menu flip="true">
            {availableLngs.map(language => (
              <Dropdown.Item key={language} onClick={() => changeLng(language)}>
                {language}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>
    );
  }
}

/* eslint-disable react/display-name */
export default props => (
  <Language>
    {lngProps => <PureLanguageSelector {...props} {...lngProps} />}
  </Language>
);
