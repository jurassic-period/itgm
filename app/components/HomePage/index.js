import React, { Fragment } from 'react'

import PageSection from 'components/PageSection'
import ContentContainer from 'components/ContentContainer'
import ActivityList from 'components/Activity/ActivityList'
import Footer from 'components/Footer'
import Header from 'components/Header'

import { Hero, Stats, Description } from './atoms'

import './style.css'

const HomePage = () => {
  return (
    <Fragment>
      <section className="HomePage-FirstScreenWrapper">
        <Header theme="inverse" />
        <Hero />
      </section>

      <Stats className="HomePage-Stats" />
      <Description className="HomePage-Description" />

      <PageSection>
        <ContentContainer>
          <ActivityList />
        </ContentContainer>
      </PageSection>

      <PageSection style={{ background: 'lightgray' }}>
        <ContentContainer>
          <p>PageSection</p>
        </ContentContainer>
      </PageSection>

      <PageSection style={{ background: 'gray' }}>
        <ContentContainer>
          <p>PageSection</p>
        </ContentContainer>
      </PageSection>

      <PageSection style={{ background: 'lightgray' }}>
        <ContentContainer>
          <p>PageSection</p>
        </ContentContainer>
      </PageSection>
      <Footer theme="inverse" />
    </Fragment>
  )
}

export default HomePage
