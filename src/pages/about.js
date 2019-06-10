import React from 'react';
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';
import { Alert, Button, Card, Container, Row, Col } from 'react-bootstrap';

import Heading from 'components/Heading';
import Layout from 'components/Layout';
import SEO from 'components/SEO';

const About = () => (
  <I18n>
    {t => (
      <Layout>
        <SEO
          title={t('about_us')}
          keywords={[t('about'), t('explanation'), t('help'), t('information')]}
        />
        <Container>
          <Row>
            <Col>
              <Heading modifier="primary">{t('about_us')}</Heading>
              <Alert variant="dark">{t('about_stmt')}</Alert>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header>About the Gusta Project</Card.Header>
                <Card.Body>
                  <Card.Title>Our Story (so far)</Card.Title>
                  <Card.Text>
                    <p>
                      In early April 2019, mixnjuice had been looking for an
                      Open API or some kind of open database for Flavor
                      Concentrates. He had started mixing in February and wanted
                      to build a better DIY community web site. That would
                      require a flavor database, but none could be found. On
                      April 19, mixnjuice posted{' '}
                      <a href="https://www.reddit.com/r/DIY_eJuice/comments/bezowp/flavor_databaseopen_api/?ref=share&ref_source=link">
                        this
                      </a>{' '}
                      on the DIY_eJuice subreddit. There was some interest, but
                      none seemed to exist, so mixnjuice set out to build one.
                      Over the next week, the database was named Gusta, which is
                      &quot;taste&quot; in{' '}
                      <a href="https://translate.google.com/#view=home&op=translate&sl=la&tl=en&text=Gusta">
                        Latin
                      </a>{' '}
                      and development on an API began.
                    </p>
                    <p>
                      On May 1, 2019, Wayne Walker (DIY or DIE) uploaded a video
                      that displayed his vision for the perfect DIY web site.
                      Suddenly, everyone seemed to be on board for a new DIY web
                      site. At some point over the next couple of days,
                      mixnjuice came across Korlimann and the Gusta Project was
                      born. Several members joined right away, while others have
                      joined since. The owner of AlltheFlavors.com has verbally
                      committed to sharing data with our project.
                    </p>
                    <p>
                      While the project Discord has reached nearly 20 members,
                      we currently have a few regular developers and a few
                      others who join when their time allows. Node.js and React
                      were chosen as the primary technology for development by
                      the team. They majority of the code written early on has
                      been submitted by{' '}
                      <a href="https://github.com/ayan4m1">ayan4m1</a>. Anyone
                      is free to join and we welcome any contribution that can
                      be made to the team.
                    </p>
                  </Card.Text>
                  <Button
                    variant="info"
                    href="https://www.reddit.com/r/DIY_eJuice/"
                  >
                    DIY_eJuice
                  </Button>
                  &nbsp;
                  <Button variant="primary" href="https://diyordievaping.com/">
                    DIY OR DIE
                  </Button>
                  &nbsp;
                  <Button variant="dark" href="https://alltheflavors.com/">
                    ATF
                  </Button>
                  &nbsp;
                  <Button
                    variant="warning"
                    href="https://github.com/orgs/gusta-project/people"
                  >
                    GitHub Contributors
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    )}
  </I18n>
);

export default withI18next()(About);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "locale" } }) {
      ...TranslationFragment
    }
  }
`;
