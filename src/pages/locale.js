import React from 'react';
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';
import { Alert, Card } from 'react-bootstrap';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Heading from 'components/Heading';

import locale from 'locale/en/locale.json';

const LocalePage = () => (
  <I18n>
    {t => (
      <Layout>
        <SEO title={t('i18n_seo_title')} />
        <Heading className="text-center" modifier="primary">
          {t('i18n_heading')}
        </Heading>
        <h3>{t('i18n_stmt')}</h3>
        <Alert variant="info">{t('i18n_info')}</Alert>
        <Card border="info">
          <Card.Header>
            File: locale/en/locale.json :&nbsp;
            <a href="https://github.com/mixnjuice/website/tree/master/src/locale/en/locale.json">
              https://github.com/mixnjuice/website/tree/master/src/locale/en/locale.json
            </a>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              {Object.keys(locale).map(key => (
                <pre key={key}>
                  &quot;{key}&quot; : &quot;{locale[key]}&quot;
                </pre>
              ))}
            </Card.Text>
          </Card.Body>
          <Card.Footer>{t('i18n_footer')}</Card.Footer>
        </Card>
      </Layout>
    )}
  </I18n>
);

export default withI18next()(LocalePage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "locale" } }) {
      ...TranslationFragment
    }
  }
`;
