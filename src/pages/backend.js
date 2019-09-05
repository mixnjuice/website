import React from 'react';
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';
import { Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Heading from 'components/Heading';

const Backend = () => (
  <I18n>
    {t => (
      <Layout>
        <SEO title={t('backend_seo_title')} />
        <Heading modifier="primary">{t('backend_heading')}</Heading>
        <h2>{t('backend_stmt')}</h2>
        <Button
          variant="primary"
          size="lg"
          href="https://github.com/mixnjuice/api"
        >
          <FontAwesomeIcon icon={faCode} />
          &nbsp; {t('button_api_github')}
        </Button>
      </Layout>
    )}
  </I18n>
);

export default withI18next()(Backend);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "locale" } }) {
      ...TranslationFragment
    }
  }
`;
