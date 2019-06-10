import React from 'react';
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const NotFoundPage = () => (
  <I18n>
    {t => (
      <Layout>
        <SEO title={t('404_not_found')} />
        <h1>{t('not_found_404')}</h1>
        <p>{t('not_found_stmt')}</p>
      </Layout>
    )}
  </I18n>
);

export default withI18next()(NotFoundPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "locale" } }) {
      ...TranslationFragment
    }
  }
`;
