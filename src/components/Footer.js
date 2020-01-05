import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Link } from 'gatsby-plugin-i18next';

class Footer extends Component {
  static propTypes = {
    siteTitle: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired
  };

  static defaultProps = {
    siteTitle: ''
  };

  render() {
    const { t } = this.props;

    return (
      <footer className="mt-5 text-right">
        <p>
          &copy; {new Date(Date.now()).getFullYear()} {this.props.siteTitle}
          &nbsp;
        </p>
        <Link to="/about">{t('about_us')}</Link> |&nbsp;
        <Link to="/privacy">{t('privacy_policy')}</Link> | {t('license_stmt')}
        <a href="https://opensource.org/licenses/MIT">MIT License</a>
      </footer>
    );
  }
}

export default translate()(Footer);
