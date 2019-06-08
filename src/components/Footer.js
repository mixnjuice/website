import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

class Footer extends Component {
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
      <footer className="mt-5 text-right">
        <p>
          &copy; {new Date().getFullYear()} {this.props.siteTitle}&nbsp;
        </p>
        {t('license_stmt')}
      </footer>
    );
  }
}

export default translate('messages')(Footer);
