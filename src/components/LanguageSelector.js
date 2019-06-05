import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Language } from 'gatsby-plugin-i18next';

export class PureLanguageSelector extends Component {
  static propTypes = {
    changeLng: PropTypes.func,
    lng: PropTypes.string,
    availableLngs: PropTypes.arrayOf(PropTypes.string)
  };

  render() {
    const { availableLngs, lng, changeLng } = this.props;

    return (
      <Dropdown>
        <Dropdown.Toggle>{lng}</Dropdown.Toggle>
        <Dropdown.Menu>
          {availableLngs.map(language => (
            <Dropdown.Item key={language} onClick={() => changeLng(language)}>
              {language}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

/* eslint-disable react/display-name */
export default props => (
  <Language>
    {lngProps => <PureLanguageSelector {...props} {...lngProps} />}
  </Language>
);
