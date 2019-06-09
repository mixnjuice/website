import React from 'react';
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Heading from 'components/Heading';

import locale from 'locale/en/locale.json';

const i18n = () => (
  <I18n>
    {t => (
      <Layout>
        <SEO title={t('i18n')} />
        <Heading className="text-center" modifier="primary">
          {t('i18n_heading')}
        </Heading>
        <h3>{t('i18n_stmt')}</h3>
        <div className="jumbotron">
          {Object.keys(locale).map(key => (
            <pre key={key}>
              &quot;{key}&quot; : &quot;{locale[key]}&quot;
            </pre>
          ))}
        </div>
      </Layout>
    )}
  </I18n>
);

export default withI18next()(i18n);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "locale" } }) {
      ...TranslationFragment
    }
  }
`;
