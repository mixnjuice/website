import React from 'react';
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';

import Heading from 'components/Heading';
import Layout from 'components/Layout';
import SEO from 'components/SEO';

const Privacy = () => (
  <I18n>
    {t => (
      <Layout>
        <SEO
          title="{t('privacy_policy')}"
          keywords={[t('privacy'), t('terms'), t('policy')]}
        />
        <Heading modifier="primary">{t('privacy_policy')}</Heading>
        <p>{t('privacy_stmt')}</p>
      </Layout>
    )}
  </I18n>
);

export default withI18next()(Privacy);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;
